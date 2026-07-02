import { NextResponse } from "next/server";
import {
  adminCookieName,
  getAdminSessionToken,
  validateAdminLogin,
} from "@/lib/admin-auth";

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<
    string,
    unknown
  > | null;

  const email = readString(body?.email);
  const password = readString(body?.password);

  if (!validateAdminLogin(email, password)) {
    return NextResponse.json(
      { error: "Invalid admin email or password." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(adminCookieName, getAdminSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return response;
}
