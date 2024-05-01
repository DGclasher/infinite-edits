import { NextResponse } from "next/server";
import sheets from "@/lib/gsheet";
import dotenv from "dotenv";
dotenv.config();

const SHEET_ID = process.env.SHEET_ID;

export async function POST(req: Request) {
  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      education,
      previous_experience,
      starting_session,
      notes,
    } = await req.json();
    const full_name = first_name + " " + last_name;
    const combinedEducation = education
      .map((e: any) => e.degree + " in " + e.field + " from " + e.institution)
      .join(", ");
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Sheet1!A2:G2",
      insertDataOption: "INSERT_ROWS",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            full_name,
            email,
            phone,
            combinedEducation,
            previous_experience,
            starting_session,
            notes,
          ],
        ],
      },
    });
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
