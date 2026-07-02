import { createHash } from "node:crypto";
import { cookies } from "next/headers";

export const adminCookieName = "snehitham_admin_session";

const defaultAdminEmail = "admin@snehitham.org";
const defaultAdminPassword = "Admin#1234";

export function getAdminCredentials() {
  return {
    email: process.env.ADMIN_EMAIL ?? defaultAdminEmail,
    password: process.env.ADMIN_PASSWORD ?? defaultAdminPassword,
  };
}

function getSessionSecret() {
  return (
    process.env.ADMIN_SESSION_SECRET ??
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    "snehitham-local-admin-session"
  );
}

export function getAdminSessionToken() {
  const { email, password } = getAdminCredentials();

  return createHash("sha256")
    .update(`${email}:${password}:${getSessionSecret()}`)
    .digest("hex");
}

export function isAdminSessionActive() {
  return cookies().get(adminCookieName)?.value === getAdminSessionToken();
}

export function validateAdminLogin(email: string, password: string) {
  const credentials = getAdminCredentials();

  return email === credentials.email && password === credentials.password;
}
