export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const formData = await request.formData();
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const phone = formData.get('phone')?.trim() || 'Not provided';
    const message = formData.get('message')?.trim();
    const token = formData.get('cf-turnstile-response');

    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    if (!token) {
      return Response.json({ error: 'Please complete the verification.' }, { status: 400 });
    }

    // Verify Turnstile token
    const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: request.headers.get('CF-Connecting-IP'),
      }),
    });

    const turnstileData = await turnstileRes.json();
    if (!turnstileData.success) {
      return Response.json({ error: 'Verification failed. Please try again.' }, { status: 403 });
    }

    // Send email via Mailgun
    const recipients = env.CONTACT_FORM_TO.split(',').map(e => e.trim());
    const mailgunUrl = `https://api.mailgun.net/v3/${env.MAILGUN_DOMAIN}/messages`;

    const emailBody = new URLSearchParams({
      from: `Better Lives Contact Form <noreply@${env.MAILGUN_DOMAIN}>`,
      to: recipients.join(','),
      'h:Reply-To': email,
      subject: `Contact form: ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        '',
        message,
      ].join('\n'),
    });

    const mailRes = await fetch(mailgunUrl, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`api:${env.MAILGUN_API_KEY}`)}`,
      },
      body: emailBody,
    });

    if (!mailRes.ok) {
      const err = await mailRes.text();
      console.error('Mailgun error:', err);
      return Response.json({ error: 'Failed to send message.' }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return Response.json({ error: 'Server error.' }, { status: 500 });
  }
}
