import { setRequestLocale } from "next-intl/server";

import db from "@/lib/db";
import { Locale } from "@/lib/i18n/config";

export default async function Test({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const users = await db.user.findMany();
  return (
    <div>
      {JSON.stringify(users)}
      <button
        onClick={async () => {
          "use server";
          await db.user.delete({ where: { id: 1 } });
        }}
      >
        Delete
      </button>
    </div>
  );
}
