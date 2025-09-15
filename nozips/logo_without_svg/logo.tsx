"use client";

// ---------------------- Logo Component ----------------------
// Flexible logo with automatic fallbacks for SaaS applications
//
// Environment variables:
// - NEXT_PUBLIC_BRAND_NAME: Your brand name (fallback: "YourSaaS")
// - NEXT_PUBLIC_LOGO_PATH: Path to logo image (optional)
//
// Usage: <Logo size="md" showText={true} />
// ---------------------- Logo Component ----------------------

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  priority?: boolean;
}

// Configuration
const BRAND_NAME = process.env.NEXT_PUBLIC_BRAND_NAME || "YourSaaS";
const LOGO_PATH = process.env.NEXT_PUBLIC_LOGO_PATH || null;

// Size mapping
const sizes = {
  sm: { icon: "h-6 w-6", text: "text-lg font-semibold" },
  md: { icon: "h-8 w-8", text: "text-xl font-bold" },
  lg: { icon: "h-10 w-10", text: "text-2xl font-bold" },
};

// Fallback icon when no logo provided
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

/**
 * Logo component with automatic fallbacks
 */
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
      {LOGO_PATH && !imageError ? (
        <div className={cn("relative", sizes[size].icon)}>
          <Image
            src={LOGO_PATH}
            alt={`${BRAND_NAME} logo`}
            fill
            className="object-contain"
            sizes={size === "lg" ? "48px" : "32px"}
            priority={priority}
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <DefaultIcon className={sizes[size].icon} />
      )}

      {showText && (
        <span className={cn("text-foreground", sizes[size].text)}>
          {BRAND_NAME}
        </span>
      )}
    </Link>
  );
}
