import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, phone, propertyType, units, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: 'ABRI REALTORS <no-reply@abrirealtors.com>',
      to: 'abrirealtors@gmail.com',
      subject: '📅 New Consultation Request',
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Property Type:</strong> ${propertyType}</p>
        <p><strong>Units:</strong> ${units}</p>
        <p><strong>Message:</strong> ${message || 'N/A'}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Email failed' });
  }
}
