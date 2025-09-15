import { cn } from "@/lib/utils";
import Image from "next/image";

type AppleProps = React.HTMLAttributes<HTMLDivElement>;

export const Apple = ({ className, ...props }: AppleProps) => {
  return (
    <div className={cn(className)} {...props}>
      {/* <Image className="group-hover:invert dark:group-hover:invert-0 transition-all" src="apple.svg" alt="apple" width={16} height={16}/> */}
      <Image src="/apple.svg" alt="apple" width={17} height={17} />
    </div>
  );
};
