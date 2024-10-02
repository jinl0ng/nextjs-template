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
  H1,
  H2,
  H3,
  H4,
  P,
  Blockquote,
  Lead,
} from "@/components/ui/typography";
import { BarChart2, TrendingUp, Users, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container mx-auto flex items-center justify-between py-6">
        <H1>Trenz.ai</H1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="#features"
                className="text-muted-foreground hover:text-primary"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#how-it-works"
                className="text-muted-foreground hover:text-primary"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="text-muted-foreground hover:text-primary"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto py-20 text-center">
          <H1>
            Unlock TikTok&apos;s E-commerce Potential with AI-Powered Insights
          </H1>
          <Lead>
            Trenz.ai helps you analyze, optimize, and skyrocket your TikTok
            e-commerce performance.
          </Lead>
          <Button size="lg">Start Your Free Trial</Button>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto py-20">
          <H2>Key Features</H2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<BarChart2 className="text-primary h-10 w-10" />}
              title="Advanced Analytics"
              description="Get deep insights into your TikTok e-commerce performance with our AI-powered analytics."
            />
            <FeatureCard
              icon={<TrendingUp className="text-primary h-10 w-10" />}
              title="Trend Prediction"
              description="Stay ahead of the curve with our AI-driven trend prediction for TikTok e-commerce."
            />
            <FeatureCard
              icon={<Users className="text-primary h-10 w-10" />}
              title="Audience Insights"
              description="Understand your audience better with detailed demographic and behavioral analysis."
            />
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-muted py-20">
          <div className="container mx-auto">
            <H2>How It Works</H2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Step
                number={1}
                title="Connect Your TikTok"
                description="Easily integrate your TikTok Shop account with Trenz.ai."
              />
              <Step
                number={2}
                title="Analyze Your Data"
                description="Our AI processes your data to generate actionable insights."
              />
              <Step
                number={3}
                title="Optimize & Grow"
                description="Use our recommendations to improve your TikTok e-commerce strategy."
              />
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="container mx-auto py-20">
          <H2>What Our Customers Say</H2>
          <Card className="mx-auto max-w-3xl">
            <CardContent className="pt-6">
              <Blockquote>
                &quot;Trenz.ai has completely transformed our TikTok e-commerce
                strategy. We&apos;ve seen a 200% increase in sales since using
                their platform!&quot;
              </Blockquote>
              <P>- Sarah Johnson, CEO of FashionFrenzy</P>
            </CardContent>
          </Card>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-muted py-20">
          <div className="container mx-auto">
            <H2>Simple, Transparent Pricing</H2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <PricingCard
                title="Starter"
                price="$49"
                period="/month"
                features={[
                  "Basic analytics",
                  "Weekly reports",
                  "Up to 5,000 followers",
                ]}
              />
              <PricingCard
                title="Pro"
                price="$99"
                period="/month"
                features={[
                  "Advanced analytics",
                  "Daily reports",
                  "Up to 50,000 followers",
                  "Trend predictions",
                ]}
                highlighted={true}
              />
              <PricingCard
                title="Enterprise"
                price="Custom"
                period=""
                features={[
                  "Full-suite analytics",
                  "Real-time reporting",
                  "Unlimited followers",
                  "Dedicated support",
                ]}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <H3>Trenz.ai</H3>
            <P>
              Empowering e-commerce businesses on TikTok with AI-driven
              insights.
            </P>
          </div>
          <div>
            <H4>Quick Links</H4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="hover:underline">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:underline">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:underline">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <H4>Contact Us</H4>
            <P>Email: info@trenz.ai</P>
            <P>Phone: (555) 123-4567</P>
          </div>
        </div>
        <div className="border-secondary-foreground/10 mt-8 border-t pt-8 text-center">
          <P>&copy; 2024 Trenz.ai. All rights reserved.</P>
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
    <Card>
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
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
      <div className="bg-primary text-primary-foreground mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold">
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
              <CheckCircle className="text-primary mr-2" size={20} />
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
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}
