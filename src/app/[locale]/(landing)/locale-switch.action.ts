"use server";

import { cookies } from "next/headers";

import { Locale, i18n } from "@/i18n/config";
import { redirect } from "@/i18n/routing";

type Href = Parameters<typeof redirect>[0]["href"];

export async function switchLocale(href: Href, locale: Locale) {
  const isLocaleValid = i18n.locales.includes(locale);
  if (!isLocaleValid) {
    throw new Error("Invalid locale");
  }
  const cookieStore = await cookies();
  cookieStore.set(i18n.cookieName, locale);
  redirect({ href, locale });
}
