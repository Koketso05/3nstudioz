const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const EMAILJS_USER_ID = process.env.EMAILJS_USER_ID; // usually public key

if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_USER_ID) {
  console.warn('Missing EmailJS config; set EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID in .env');
}

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_USER_ID) {
    return res.status(500).json({ success: false, message: 'Email service not configured.' });
  }

  const { name, email, phone, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields.' });
  }

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_USER_ID,
        template_params: {
          from_name: name,
          from_email: email,
          phone: phone || 'Not provided',
          message
        }
      })
    });

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Message sent successfully.' });
    }

    const errorText = await response.text();
    console.error('EmailJS API error', response.status, errorText);
    return res.status(500).json({ success: false, message: 'Email service error.' });

  } catch (error) {
    console.error('Email send failed', error);
    return res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

app.listen(port, () => {
  console.log(`EmailJS proxy server listening on http://localhost:${port}`);
});
