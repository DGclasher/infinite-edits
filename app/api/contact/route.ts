import dotenv from "dotenv";
import sheets from "@/lib/gsheet";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { validateEmail } from "@/lib/utils";

dotenv.config();

const SERVICE_SHEET_ID = process.env.SERVICE_SHEET_ID;

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
      help,
      services,
      info,
    } = await req.json();
    const isValidEmail = await validateEmail(email);
    if (!isValidEmail) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }
    const mailOptions = {
      from: email,
      to: process.env.MAIL_TO?.split(","),
      subject: help,
      html: `
            <h2>Contact from ${first_name} ${last_name}</h2>
            <p>Email: ${email}</p>
            <p>Company: ${company_name}</p>
            <p>Service Request: ${services}</p>
            <p>Message: ${info}</p>
        `,
    };
    await transporter.sendMail(mailOptions);
    await sheets.spreadsheets.values.append({
      spreadsheetId: SERVICE_SHEET_ID,
      range: "Sheet1!A2:F2",
      insertDataOption: "INSERT_ROWS",
      valueInputOption: "RAW",
      requestBody: {
        values: [[
          first_name + " " + last_name,
          email,
          company_name,
          help,
          services,
          info,
        ]]
      }
    })
    console.log("Email sent");
    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error sending email", error: error }, { status: 500 });
  }
}
