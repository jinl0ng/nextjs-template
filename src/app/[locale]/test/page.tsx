import { revalidateTag } from "next/cache";

import { setRequestLocale } from "next-intl/server";

import { Locale } from "@/lib/i18n/config";

export default async function Test({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const dogs = await fetch("https://dog.ceo/api/breeds/image/random", {
    next: { tags: ["dogs"], revalidate: 10 },
  }).then((res) => res.json());
  return (
    <div>
      <div>Pages: {JSON.stringify(dogs)}</div>
      <button
        onClick={async () => {
          "use server";
          revalidateTag("dogs");
        }}
      >
        Refresh
      </button>
    </div>
  );
}
