import { NextRequest, NextResponse } from "next/server";
import { createContactFormSchema } from "@/lib/schemas";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // For server-side validation, we'll use a simple schema without translations
    // since we don't have access to the translation function here
    const simpleSchema = createContactFormSchema((key: string) => key);
    const validatedData = simpleSchema.parse(body);

    // Send email using nodemailer
    const emailResult = await sendContactEmail(validatedData);

    if (!emailResult.success) {
      console.error("Failed to send email:", emailResult.error);
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email. Please try again later.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message. We'll get back to you soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          message: "Error sending email. Please try again later.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
