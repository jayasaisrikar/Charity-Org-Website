export type ContactSubmission = {
  id?: string | number;
  name: string;
  email: string;
  subject?: string | null;
  message: string;
  created_at?: string | null;
};

const fallbackPublishableKey =
  "sb_publishable_hgBSl9Zyobd6S_wZpO8BIg_zVPQiJlo";

export function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/+$/, "") ?? "";
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? fallbackPublishableKey;

  return {
    url,
    key,
    missing: !url || !key,
  };
}

function getHeaders() {
  const { key } = getSupabaseConfig();

  return {
    apikey: key,
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  };
}

export async function createContactSubmission(
  submission: ContactSubmission,
) {
  const { url, missing } = getSupabaseConfig();

  if (missing) {
    return {
      ok: false,
      error: "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL.",
    };
  }

  const response = await fetch(`${url}/rest/v1/contact_submissions`, {
    method: "POST",
    headers: {
      ...getHeaders(),
      Prefer: "return=minimal",
    },
    body: JSON.stringify(submission),
  });

  if (!response.ok) {
    const details = await response.text();
    return {
      ok: false,
      error: details || "Unable to save submission.",
    };
  }

  return { ok: true, error: null };
}

export async function getContactSubmissions() {
  const { url, missing } = getSupabaseConfig();

  if (missing) {
    return {
      data: [] as ContactSubmission[],
      error: "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL.",
    };
  }

  const response = await fetch(
    `${url}/rest/v1/contact_submissions?select=*&order=created_at.desc`,
    {
      headers: getHeaders(),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    const details = await response.text();
    return {
      data: [] as ContactSubmission[],
      error: details || "Unable to load submissions.",
    };
  }

  const data = (await response.json()) as ContactSubmission[];
  return { data, error: null };
}
