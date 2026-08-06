import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email } = body as { email?: string };

  if (!email) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  return NextResponse.json({
    message: "Password reset is disabled because auth is not configured in this project.",
    email,
  });
}
