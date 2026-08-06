import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const siteUrl = process.env.SITE_URL || "https://example.com";
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
    apiVersion: "2023-10-16",
  });
  let data = await request.json();
  let priceId = data.priceId;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: siteUrl,
    cancel_url: siteUrl,
  });

  return NextResponse.json(session.url);
}
