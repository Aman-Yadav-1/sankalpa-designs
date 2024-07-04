import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, phone, message } = req.body;

      const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'admin@sankalpadesigns.in',
          pass: 'admin123$',
        },
      });

      const mailOptions = {
        from: 'admin@sankalpadesigns.in',
        to: 'admin@sankalpadesigns.in',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`,
      };

      const emailResult = await transporter.sendMail(mailOptions);
      console.log('Email sent:', emailResult);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
