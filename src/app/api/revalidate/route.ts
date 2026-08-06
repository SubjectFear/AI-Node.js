import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    status: 200,
    revalidated: false,
    message: "Revalidation is disabled because the CMS integration was removed.",
  });
}
