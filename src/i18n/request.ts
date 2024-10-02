import { headers as getHeaders } from "next/headers";
import { cookies } from "next/headers";

import Negotiator from "negotiator";
import { getRequestConfig } from "next-intl/server";

import { i18n } from "./config";

async function getLocaleByHeader(
  serverAvailableLocales: string[],
  defaultLocale: string
) {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  const headers = await getHeaders();
  headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  const clientLanguage = new Negotiator({
    headers: negotiatorHeaders,
  }).language(serverAvailableLocales);

  const isClientLanguageValid =
    clientLanguage && serverAvailableLocales.includes(clientLanguage);
  if (isClientLanguageValid) {
    return clientLanguage;
  }

  return defaultLocale;
}

export default getRequestConfig(async () => {
  const serverAvailableLocales = i18n.locales as unknown as string[];
  const defaultLocale = i18n.defaultLocale;
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const cookieLocale = (await cookies()).get(i18n.cookieName)?.value;
  const isCookieLocaleValid =
    cookieLocale && serverAvailableLocales.includes(cookieLocale);
  if (isCookieLocaleValid) {
    return {
      locale: cookieLocale,
      messages: (await import(`../../messages/${cookieLocale}.json`)).default,
    };
  } else {
    const locale = await getLocaleByHeader(
      serverAvailableLocales,
      defaultLocale
    );
    return {
      locale,
      messages: (await import(`../../messages/${locale}.json`)).default,
    };
  }
});
