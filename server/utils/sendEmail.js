import nodeMailer from "nodemailer";
import dotenv from "dotenv"
dotenv.config();
export const sendEmail = async ({ email, subject, message }) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,          // "smtp.gmail.com"
    service: process.env.SMTP_SERVICE,    // "gmail"
    port: Number(process.env.SMTP_PORT),    // 587 (ensure it is converted to a number if needed)
    secure: false,                         // For port 587, set secure to false (it will use STARTTLS)
    auth: {
      user: process.env.SMTP_MAIL,         // Your email address
      pass: process.env.SMTP_PASSWORD,     // Your Gmail App Password
    },
  });

  const options = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject,
    html: message,
  };

  await transporter.sendMail(options);
};
