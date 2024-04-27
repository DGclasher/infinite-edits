import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const {
      first_name,
      last_name,
      email,
      company_name,
      job_title,
      help,
      services,
      info,
    } = await req.json();
    const mailOptions = {
      from: email,
      to: process.env.MAIL_TO?.split(","),
      subject: help,
      html: `
            <h2>Contact from ${first_name} ${last_name}</h2>
            <p>Email: ${email}</p>
            <p>Company: ${company_name}</p>
            <p>Job Title: ${job_title}</p>
            <p>Service Request: ${services}</p>
            <p>Message: ${info}</p>
        `,
    };
    await transporter.sendMail(mailOptions);
    console.log("Email sent");
    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error sending email", error: error }, { status: 500 });
  }
}
