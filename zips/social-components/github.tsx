import { cn } from "@/lib/utils";
import Image from "next/image";

type GithubProps = React.HTMLAttributes<HTMLDivElement>;

export const Github = ({ className, ...props }: GithubProps) => {
  return (
    <div className={cn(className)} {...props}>
      {/* <Image
        className="group-hover:invert dark:group-hover:invert-0 transition-all"
        src="github.svg"
        alt="github"
        width={16}
        height={16}
      /> */}
      <Image src="/github.svg" alt="github" width={17} height={17} />
    </div>
  );
};
