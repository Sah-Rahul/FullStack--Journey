import nodemailer from "nodemailer";
import { config } from "../config/index.js";

const transporter = nodemailer.createTransport({
  host: config.email.host,
  port: config.email.port,
  secure: false,
  auth: { user: config.email.user, pass: config.email.pass }
});

export const sendEmail = async ({ to, subject, html }) => {
  await transporter.sendMail({
    from: `"Capstone" <${config.email.user}>`,
    to, subject, html
  });
};
