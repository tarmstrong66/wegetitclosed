export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, state, loanType, message } = body;

    if (!firstName || !lastName || !email) {
      return json({ success: false, error: 'Required fields missing' }, 400);
    }

    const text = [
      'New contact form submission from wegetitclosed.com',
      '',
      `Name:       ${firstName} ${lastName}`,
      `Email:      ${email}`,
      `Phone:      ${phone || 'Not provided'}`,
      `State:      ${state || 'Not provided'}`,
      `Loan Type:  ${loanType || 'Not provided'}`,
      '',
      `Message:`,
      message || 'No message provided',
    ].join('\n');

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'tamarketing365@gmail.com',
        subject: `New Lead: ${firstName} ${lastName}${state ? ' - ' + state : ''}`,
        text,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Resend error:', err);
      return json({ success: false }, 500);
    }

    return json({ success: true }, 200);
  } catch (err) {
    console.error('Contact function error:', err);
    return json({ success: false }, 500);
  }
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
