"use client";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { switchLocale } from "./locale-switch.action";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => switchLocale(locale === "en" ? "zh" : "en")}
    >
      {t("switchTo", { locale: locale === "en" ? "中文" : "English" })}
    </Button>
  );
}
