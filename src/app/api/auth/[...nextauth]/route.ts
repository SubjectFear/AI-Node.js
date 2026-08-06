import { NextResponse } from "next/server";

const authIsConfigured = Boolean(
  process.env.NEXTAUTH_URL || process.env.NEXTAUTH_SECRET || process.env.SECRET,
);

export async function GET(req: Request) {
  if (!authIsConfigured) {
    return NextResponse.json(
      { message: "Auth is disabled in this project." },
      { status: 503 },
    );
  }

  const { default: NextAuth } = await import("next-auth");
  const { authOptions } = await import("@/libs/auth");
  const handler = NextAuth(authOptions);
  return handler(req);
}

export async function POST(req: Request) {
  if (!authIsConfigured) {
    return NextResponse.json(
      { message: "Auth is disabled in this project." },
      { status: 503 },
    );
  }

  const { default: NextAuth } = await import("next-auth");
  const { authOptions } = await import("@/libs/auth");
  const handler = NextAuth(authOptions);
  return handler(req);
}
