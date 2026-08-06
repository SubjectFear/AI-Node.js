import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/libs/email";

const CONTACT_EMAIL = "reklawmada67@yahoo.com";

// Prevent HTML/script injection into the email body
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, date, time, message } = body as {
    name?: string;
    email?: string;
    date?: string;
    time?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and message." },
      { status: 400 },
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    await sendEmail({
      to: CONTACT_EMAIL,
      subject: `New contact request from ${name}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${date ? `<p><strong>Preferred date:</strong> ${escapeHtml(date)}</p>` : ""}
        ${time ? `<p><strong>Preferred time:</strong> ${escapeHtml(time)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ message: "Sent" });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json(
      {
        error:
          "Email delivery isn't configured yet. Please reach out directly at " +
          CONTACT_EMAIL,
      },
      { status: 500 },
    );
  }
}
