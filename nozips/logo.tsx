//  src/components/logo.tsx

import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image src="logo.svg" alt="logo" width={40} height={40} />
    </Link>
  );
};