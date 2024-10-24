import { setRequestLocale } from "next-intl/server";

import { Locale } from "@/i18n/config";

export default async function Test({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <div>Test</div>;
}
