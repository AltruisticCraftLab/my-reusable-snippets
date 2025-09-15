"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface LogoProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  priority?: boolean; // for Next.js Image optimization
}

// Simple configuration - just set these env vars
const BRAND_NAME = process.env.NEXT_PUBLIC_BRAND_NAME || "YourSaaS";
const LOGO_PATH = process.env.NEXT_PUBLIC_LOGO_PATH || null;

// Simple size mapping
const sizes = {
  xs: { icon: "h-5 w-5", text: "text-base font-semibold" },
  sm: { icon: "h-6 w-6", text: "text-lg font-semibold" },
  md: { icon: "h-8 w-8", text: "text-xl font-bold" },
  lg: { icon: "h-10 w-10", text: "text-2xl font-bold" },
  xl: { icon: "h-12 w-12", text: "text-3xl font-bold" },
};

// Simple fallback icon
const DefaultIcon = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold",
      className
    )}
  >
    {BRAND_NAME.charAt(0).toUpperCase()}
  </div>
);

export function Logo({
  className,
  size = "md",
  showText = true,
  priority = false,
}: LogoProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 transition-opacity hover:opacity-80",
        className
      )}
      aria-label={`${BRAND_NAME} home page`}
    >
      {/* Logo or fallback */}
      {LOGO_PATH && !imageError ? (
        <div className={cn("relative", sizes[size].icon)}>
          <Image
            src={LOGO_PATH}
            alt={`${BRAND_NAME} logo`}
            fill
            className="object-contain"
            sizes={size === "xl" || size === "lg" ? "48px" : "40px"}
            priority={priority}
            onError={() => setImageError(true)} // Add this line
          />
        </div>
      ) : (
        <DefaultIcon className={sizes[size].icon} />
      )}

      {/* Brand name */}
      {showText && (
        <span className={cn("text-foreground", sizes[size].text)}>
          {BRAND_NAME}
        </span>
      )}
    </Link>
  );
}
