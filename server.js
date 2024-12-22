// Importeer vereiste modules
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

// Debug logging voor environment variables
console.log('Environment variables:', {
  SMTP_HOST: process.env.REACT_APP_SMTP_HOST,
  SMTP_PORT: process.env.REACT_APP_SMTP_PORT,
  SMTP_USER: process.env.REACT_APP_SMTP_USER,
  FROM: process.env.REACT_APP_SMTP_FROM,
});

const app = express();

// CORS-configuratie voor frontend
app.use(cors({
  origin: ['http://localhost:3000', 'https://jouwdomein.nl']
}));

// Middleware voor JSON-gegevens
app.use(express.json());

// Endpoint voor contactformulier
app.post('/api/contact', async (req, res) => {
  try {
    const { naam, email, bericht, honeypot } = req.body;
    
    // Honeypot-controle
    if (honeypot) {
      return res.status(200).json({ message: 'Succes' }); // Fake succes
    }

    // SMTP Transport configuratie
    const transportConfig = {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.REACT_APP_SMTP_USER,
        pass: process.env.REACT_APP_SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: true,
        minVersion: "TLSv1.2"
      },
      debug: true
    };

    console.log('Transport config:', {
      ...transportConfig,
      auth: { user: transportConfig.auth.user, pass: '***' }
    });

    // Maak transporter met configuratie
    const transporter = nodemailer.createTransport(transportConfig);

    // Test de verbinding
    await transporter.verify();
    console.log('SMTP verbinding succesvol geverifieerd');

    // Email verzenden
    await transporter.sendMail({
      from: process.env.REACT_APP_SMTP_FROM,
      to: 'rubenrump@gmail.com',
      subject: `Nieuw bericht van ${naam}`,
      text: `
        Naam: ${naam}
        Email: ${email}
        Bericht:
        ${bericht}
      `,
      html: `
        <h2>Nieuw contactformulier bericht</h2>
        <p><strong>Naam:</strong> ${naam}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br>
        <p><strong>Bericht:</strong></p>
        <p>${bericht.replace(/\n/g, '<br>')}</p>
      `
    });

    res.status(200).json({ message: 'Bericht succesvol verzonden' });
  } catch (error) {
    console.error('Fout:', error);
    res.status(500).json({ error: 'Er is iets misgegaan bij het verzenden van het bericht' });
  }
});

// Start de server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server draait op poort ${PORT}`);
});