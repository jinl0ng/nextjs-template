import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { Locale } from "@/lib/i18n/config";
import { routing } from "@/lib/i18n/routing";

import "./globals.css";
import { ThemeProvider } from "./theme-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const experimental_ppr = true;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html suppressHydrationWarning lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NuqsAdapter>{children}</NuqsAdapter>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
