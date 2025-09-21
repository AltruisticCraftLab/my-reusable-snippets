'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { BRAND_NAME, LOGO_PATH } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  priority?: boolean;
  href?: string;
}

const sizes = {
  sm: { icon: 'h-6 w-6', text: 'text-lg font-semibold', imageSize: '24px' },
  md: { icon: 'h-8 w-8', text: 'text-xl font-bold', imageSize: '32px' },
  lg: { icon: 'h-10 w-10', text: 'text-2xl font-bold', imageSize: '40px' },
};

const DefaultIcon = ({ className }: { className?: string }) => (
  <div
    className={cn(
      'bg-primary text-primary-foreground flex items-center justify-center rounded-lg font-bold',
      className
    )}
  >
    {BRAND_NAME.charAt(0).toUpperCase()}
  </div>
);

/**
 * Logo component with automatic fallbacks.
 * Falls back to brand initial if no logo image is provided or fails to load.
 */
export function Logo({
  className,
  size = 'md',
  showText = true,
  priority = false,
  href = '/',
}: LogoProps) {
  const [imageError, setImageError] = useState(false);
  const sizeConfig = sizes[size];

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2 transition-opacity hover:opacity-80',
        className
      )}
      aria-label={`${BRAND_NAME} home page`}
    >
      {LOGO_PATH && !imageError ? (
        <div className={cn('relative flex-shrink-0', sizeConfig.icon)}>
          <Image
            src={LOGO_PATH}
            alt=""
            fill
            className="object-contain"
            sizes={sizeConfig.imageSize}
            priority={priority}
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <DefaultIcon className={cn('flex-shrink-0', sizeConfig.icon)} />
      )}

      {showText && (
        <span className={cn('text-foreground', sizeConfig.text)}>
          {BRAND_NAME}
        </span>
      )}
    </Link>
  );
}