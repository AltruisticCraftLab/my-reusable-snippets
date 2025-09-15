import { cn } from "@/lib/utils";
import Image from "next/image";

type EmailProps = React.HTMLAttributes<HTMLDivElement>;

export const Email = ({ className, ...props }: EmailProps) => {
  return (
    <div className={cn(className)} {...props}>
      {/* <Image className="group-hover:invert dark:group-hover:invert-0 transition-all" src="email.svg" alt="email" width={16} height={16}/> */}
      <Image src="/email.svg" alt="email" width={18} height={18} />
    </div>
  );
};
