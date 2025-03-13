const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.mailersend.net',
  port: 587,
  secure: false, 
  auth: {
    user: 'MS_CiJ6fK@trial-x2p0347nezplzdrn.mlsender.net',
    pass: 'mssp.ZOYgpKY.yzkq340kr6xgd796.O8rOe7m'
  },
  tls: {
    rejectUnauthorized: false
  }
});

const sendEmail = async (to, subject, text) => {
  try {
    const mailOptions = {
      from: 'Rafael Costa - LOBA <MS_zdKYxE@trial-x2p0347nezplzdrn.mlsender.net>',
      to,
      subject,
      text
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email enviado: ' + info.response);
    return info;
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    throw error;
  }
};

module.exports = { sendEmail };
