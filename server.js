// server.js
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors'
import { configDotenv } from 'dotenv';

configDotenv()

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New message from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email', error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
});

app.listen(5000, () => console.log('Server started on port 5000'));
