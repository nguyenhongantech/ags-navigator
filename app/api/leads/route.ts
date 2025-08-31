import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  // In production, push to CRM or DB here.
  // Example: await fetch(process.env.CRM_WEBHOOK_URL!, { method: "POST", body: JSON.stringify(body) });
  console.log("New lead", body);
  return NextResponse.json({ ok: true, received: body });
}
