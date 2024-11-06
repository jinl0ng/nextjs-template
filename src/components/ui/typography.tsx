import { cn } from "@/lib/utils";
import { LegacyRef, ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  // ref?: React.Ref<HTMLHeadingElement | HTMLParagraphElement | HTMLQuoteElement | HTMLDivElement | HTMLElement>;
}

export function H1({ children, className, ref }: TypographyProps & { ref?: React.Ref<HTMLHeadingElement> }) {
  return (
    <h1
      ref={ref}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className, ref }: TypographyProps & { ref?: React.Ref<HTMLHeadingElement> }) {
  return (
    <h2
      ref={ref}
      className={cn(
        "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className, ref }: TypographyProps & { ref?: React.Ref<HTMLHeadingElement> }) {
  return (
    <h3
      ref={ref}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className, ref }: TypographyProps & { ref?: React.Ref<HTMLHeadingElement> }) {
  return (
    <h4
      ref={ref}
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h4>
  );
}

export function P({ children, className, ref }: TypographyProps & { ref?: React.Ref<HTMLParagraphElement> }) {
  return (
    <p 
      ref={ref}
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
    >
      {children}
    </p>
  );
}

export function Blockquote({ children, className, ref }: TypographyProps & { ref?: React.Ref<HTMLQuoteElement> }) {
  return (
    <blockquote 
      ref={ref}
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
    >
      {children}
    </blockquote>
  );
}

export function InlineCode({ children, className, ref }: TypographyProps & { ref?: LegacyRef<HTMLElement> }) {
  return (
    <code
      ref={ref}
      className={cn(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      )}
    >
      {children}
    </code>
  );
}

export function Lead({ children, className, ref }: TypographyProps & { ref?: React.Ref<HTMLParagraphElement> }) {
  return (
    <p 
      ref={ref}
      className={cn("text-muted-foreground text-xl", className)}
    >
      {children}
    </p>
  );
}

export function Large({ children, className, ref }: TypographyProps & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div 
      ref={ref}
      className={cn("text-lg font-semibold", className)}
    >
      {children}
    </div>
  );
}

export function Small({ children, className, ref }: TypographyProps & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <small 
      ref={ref}
      className={cn("text-sm font-medium leading-none", className)}
    >
      {children}
    </small>
  );
}

export function Muted({ children, className, ref }: TypographyProps & { ref?: React.Ref<HTMLParagraphElement> }) {
  return (
    <p 
      ref={ref}
      className={cn("text-muted-foreground text-sm", className)}
    >
      {children}
    </p>
  );
}
