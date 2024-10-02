"use server";
import { i18n, Locale } from "@/i18n/config";
import { cookies } from "next/headers";

export async function switchLocale(locale: Locale) {
  const isLocaleValid = i18n.locales.includes(locale);
  if (!isLocaleValid) {
    throw new Error("Invalid locale");
  }
  const cookieStore = await cookies();
  cookieStore.set(i18n.cookieName, locale);
}
