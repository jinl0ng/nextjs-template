import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

import { i18n } from "./config";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: i18n.locales,

  // Used when no locale matches
  defaultLocale: i18n.defaultLocale,
  localePrefix: "as-needed",
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
