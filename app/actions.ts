"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { LOCALE_COOKIE, SUPPORTED_LOCALES, type Locale } from "@/lib/locale";

/**
 * Persist the visitor's locale choice. Server action so it works without
 * client JS — the footer's language switcher is a plain <form>.
 */
export async function setLocale(formData: FormData) {
  const next = String(formData.get("locale") ?? "");
  if (!SUPPORTED_LOCALES.includes(next as Locale)) return;

  const cookieStore = await cookies();
  cookieStore.set(LOCALE_COOKIE, next, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    httpOnly: false,
  });

  // The home page reads the locale on every request; revalidate so the
  // user immediately sees the new language without a hard reload.
  revalidatePath("/", "layout");
}
