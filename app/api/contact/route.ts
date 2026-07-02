import { NextResponse } from "next/server";
import { createContactSubmission } from "@/lib/supabase";

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<
    string,
    unknown
  > | null;

  const name = readString(body?.name);
  const email = readString(body?.email);
  const subject = readString(body?.subject);
  const message = readString(body?.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const result = await createContactSubmission({
    name,
    email,
    subject: subject || null,
    message,
  });

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
