import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type XProps = React.HTMLAttributes<HTMLDivElement>;

export const X = ({ className, ...props }: XProps) => {
  return (
    <div className={cn(className)} {...props}>
      {/* <Image className="group-hover:invert dark:group-hover:invert-0 transition-all" src="x.svg" alt="x" width={16} height={16}/> */}
      <Image src="/x.svg" alt="x" width={15} height={15} />
    </div>
  );
};
