import Link from "next/link";
import { Suspense } from "react";

import { BarChart2, CheckCircle, TrendingUp, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Blockquote,
  H1,
  H2,
  H3,
  H4,
  Lead,
  P,
} from "@/components/ui/typography";
import { Locale } from "@/i18n/config";

import LocaleSwitcher from "./locale-switcher";
import { ThemeSwitcher } from "./theme-switcher";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("LandingPage");

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container mx-auto flex items-center justify-between py-6">
        <H2>{t("title")}</H2>
        <nav className="flex items-center">
          <ul className="mr-4 flex space-x-6">
            <li>
              <Link
                href="#features"
                className="text-muted-foreground hover:text-primary"
              >
                {t("nav.features")}
              </Link>
            </li>
            <li>
              <Link
                href="#how-it-works"
                className="text-muted-foreground hover:text-primary"
              >
                {t("nav.howItWorks")}
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="text-muted-foreground hover:text-primary"
              >
                {t("nav.pricing")}
              </Link>
            </li>
          </ul>
          <Suspense fallback={null}>
            <LocaleSwitcher />
          </Suspense>
          <ThemeSwitcher />
        </nav>
      </header>

      <main className="flex-grow">
        <section className="container mx-auto py-32 text-center">
          <H1 className="mb-6">{t("hero.title")}</H1>
          <Lead className="mb-8">{t("hero.subtitle")}</Lead>
          <Button size="lg" className="px-8 py-3 text-lg">
            {t("hero.cta")}
          </Button>
        </section>

        <section id="features" className="container mx-auto py-20">
          <H2 className="mb-12">{t("features.title")}</H2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<BarChart2 className="h-10 w-10 text-primary" />}
              title={t("features.analytics.title")}
              description={t("features.analytics.description")}
            />
            <FeatureCard
              icon={<TrendingUp className="h-10 w-10 text-primary" />}
              title={t("features.trends.title")}
              description={t("features.trends.description")}
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title={t("features.audience.title")}
              description={t("features.audience.description")}
            />
          </div>
        </section>

        <section id="how-it-works" className="bg-muted py-20">
          <div className="container mx-auto">
            <H2 className="mb-12">{t("howItWorks.title")}</H2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Step
                number={1}
                title={t("howItWorks.step1.title")}
                description={t("howItWorks.step1.description")}
              />
              <Step
                number={2}
                title={t("howItWorks.step2.title")}
                description={t("howItWorks.step2.description")}
              />
              <Step
                number={3}
                title={t("howItWorks.step3.title")}
                description={t("howItWorks.step3.description")}
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto py-20">
          <H2 className="mb-12">{t("testimonial.title")}</H2>
          <Card className="mx-auto max-w-3xl">
            <CardContent className="pt-6">
              <Blockquote>{t("testimonial.quote")}</Blockquote>
              <P>{t("testimonial.author")}</P>
            </CardContent>
          </Card>
        </section>

        <section id="pricing" className="bg-muted py-20">
          <div className="container mx-auto">
            <H2 className="mb-12">{t("pricing.title")}</H2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <PricingCard
                title={t("pricing.starter.title")}
                price={t("pricing.starter.price")}
                period={t("pricing.starter.period")}
                features={t.raw("pricing.starter.features")}
              />
              <PricingCard
                title={t("pricing.pro.title")}
                price={t("pricing.pro.price")}
                period={t("pricing.pro.period")}
                features={t.raw("pricing.pro.features")}
                highlighted={true}
              />
              <PricingCard
                title={t("pricing.enterprise.title")}
                price={t("pricing.enterprise.price")}
                period={t("pricing.enterprise.period")}
                features={t.raw("pricing.enterprise.features")}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary py-16 text-secondary-foreground">
        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <H3>{t("footer.company")}</H3>
            <P>{t("footer.description")}</P>
          </div>
          <div>
            <H4>{t("footer.quickLinks")}</H4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="hover:underline">
                  {t("nav.features")}
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:underline">
                  {t("nav.howItWorks")}
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:underline">
                  {t("nav.pricing")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <H4>{t("footer.contact.title")}</H4>
            <P>{t("footer.contact.email")}</P>
            <P>{t("footer.contact.phone")}</P>
          </div>
        </div>
        <div className="mt-8 border-t border-secondary-foreground/10 pt-8 text-center">
          <P>{t("footer.copyright", { year: new Date().getFullYear() })}</P>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="transition-shadow duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

interface StepProps {
  number: number;
  title: string;
  description: string;
}

function Step({ number, title, description }: StepProps) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
        {number}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

interface PricingCardProps {
  title: string;
  price: string | number;
  period: string;
  features: string[];
  highlighted?: boolean;
}

function PricingCard({
  title,
  price,
  period,
  features,
  highlighted = false,
}: PricingCardProps) {
  const t = useTranslations("LandingPage");

  return (
    <Card className={highlighted ? "border-primary" : ""}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-xl">{period}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="mr-2 text-primary" size={20} />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={highlighted ? "default" : "outline"}
        >
          {t("pricing.cta")}
        </Button>
      </CardFooter>
    </Card>
  );
}
