export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Here you would send an email (e.g., using nodemailer, Resend, etc.)
  // For now, just log and return success
  console.log(`Contact from ${name} (${email}): ${message}`);

  // TODO: Implement actual email sending
  // Example using Resend:
  // const { Resend } = require('resend');
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({ ... });

  return res.status(200).json({ message: 'Message received' });
}