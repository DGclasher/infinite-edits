import sheets from "@/lib/gsheet";
import { NextResponse } from "next/server";
import { validateEmail } from "@/lib/utils";

import dotenv from "dotenv";
dotenv.config();

const SHEET_ID = process.env.SHEET_ID;

export async function POST(req: Request) {
  try {
    console.log("Request received");
    
    const { first_name, last_name, email, phone, previous_experience, notes } =
      await req.json();
    const full_name = first_name + " " + last_name;
    const isValidEmail = await validateEmail(email);
    if (!isValidEmail) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Sheet1!A2:E2",
      insertDataOption: "INSERT_ROWS",
      valueInputOption: "RAW",
      requestBody: {
        values: [[full_name, email, phone, previous_experience, notes]],
      },
    });
    return NextResponse.json({ message: "Submitted Successfully" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
