import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className={cn("container mx-auto 2xl:w-[1280px] 3xl:w-[1590px] px-4")}>{children}</div>
  );
};

export default Container;
