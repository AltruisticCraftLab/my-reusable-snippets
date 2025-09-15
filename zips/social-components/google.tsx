import { cn } from "@/lib/utils";
import Image from "next/image";

type GoogleProps = React.HTMLAttributes<HTMLDivElement>;

export const Google = ({ className, ...props }: GoogleProps) => {
  return (
    <div className={cn(className)} {...props}>
      <Image src="/google.svg" alt="apple" width={15} height={15} />
    </div>
  );
};
