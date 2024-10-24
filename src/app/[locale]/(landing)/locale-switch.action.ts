"use server";

import { cookies } from "next/headers";

import { Locale, i18n } from "@/i18n/config";

export async function switchLocale(locale: Locale) {
  const isLocaleValid = i18n.locales.includes(locale);
  if (!isLocaleValid) {
    throw new Error("Invalid locale");
  }
  const cookieStore = await cookies();
  cookieStore.set(i18n.cookieName, locale);
}
