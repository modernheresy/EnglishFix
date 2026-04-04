export async function onRequestPost(context) {
  try {
    const data = await context.request.formData();
    const email = data.get('email');

    if (!email) {
      return new Response("Email is required", { status: 400 });
    }

    // 1. Send the email to Brevo's API
    // Note: context.env.BREVO_API_KEY must be set in your Cloudflare Dashboard
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': context.env.BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        listIds: [2], // Check Brevo > Contacts > Lists to confirm this ID
        updateEnabled: true
      })
    });

    // We log the error to the Cloudflare console if Brevo fails, 
    // but we still let the user redirect so they don't see a broken page.
    if (!brevoResponse.ok) {
      const errorText = await brevoResponse.text();
      console.error("Brevo API Error:", errorText);
    }

    // 2. Redirect the user to your success page
    return Response.redirect(`${new URL(context.request.url).origin}/success.html`, 303);

  } catch (err) {
    console.error("Worker Error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
