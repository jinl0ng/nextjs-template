"use client";

import { useSearchParams } from "next/navigation";

import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { usePathname } from "@/lib/i18n/routing";

import { switchLocale } from "./locale-switch.action";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const query = useSearchParams();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() =>
        switchLocale(
          { pathname, query: Object.fromEntries(query) },
          locale === "en" ? "zh" : "en"
        )
      }
    >
      {t("switchTo", { locale: locale === "en" ? "中文" : "English" })}
    </Button>
  );
}
