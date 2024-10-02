import { Component } from "./chart";
import { useTranslations, useLocale } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <div>
      <h1 className="text-4xl">{t("title")}</h1>
      <p>Locale: {locale}</p>
      <Component />
    </div>
  );
}
