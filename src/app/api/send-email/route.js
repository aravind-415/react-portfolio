import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ message: 'All fields are required' }), { status: 400 });
  }

  try {
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '[REDACTED]' : 'undefined');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error.message);
    console.error('Error details:', error);
    return new Response(JSON.stringify({ message: 'Failed to send message', error: error.message }), { status: 500 });
  }
}