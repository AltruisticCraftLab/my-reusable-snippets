import { cn } from "@/lib/utils";
import Image from "next/image";

type FacebookProps = React.HTMLAttributes<HTMLDivElement>;

export const Facebook = ({ className, ...props }: FacebookProps) => {
  return (
    <div className={cn(className)} {...props}>
      <Image src="/facebook.svg" alt="apple" width={17} height={17} />
    </div>
  );
};
