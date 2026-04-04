export async function onRequestPost(context) {
  try {
    const data = await context.request.formData();
    const email = data.get('email');

    if (!email) {
      return new Response("Email is required", { status: 400 });
    }

    // This redirects the user to your ALREADY CREATED success page
    return Response.redirect(`${new URL(context.request.url).origin}/success.html`, 303);

  } catch (err) {
    return new Response("Error processing form", { status: 500 });
  }
}
