export async function onRequestPost(context) {
  try {
    const input = await context.request.formData();
    const email = input.get('email');

    if (!email) {
      return new Response("Email is required", { status: 400 });
    }

    // This is where you would eventually plug in an Email API (like Mailgun or SendGrid)
    // For now, we will redirect the user to a "Success" page to deliver the PDF.
    
    return Response.redirect(`${new URL(context.request.url).origin}/success.html`, 303);

  } catch (err) {
    return new Response("Error processing form", { status: 500 });
  }
}
