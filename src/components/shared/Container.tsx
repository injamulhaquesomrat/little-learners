import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "container mx-auto 2xl:w-[1280px] 3xl:w-[1590px] px-4 2xl:px-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
