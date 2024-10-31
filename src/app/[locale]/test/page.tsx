import { setRequestLocale } from "next-intl/server";

import { Locale } from "@/i18n/config";
import db from "@/lib/db";

export default async function Test({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const users = await db.user.findMany();
  return <div>{JSON.stringify(users)}</div>;
}
