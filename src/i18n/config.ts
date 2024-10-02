export const i18n = {
  cookieName: "NEXT_LOCALE",
  defaultLocale: "en",
  locales: ["en", "zh"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
