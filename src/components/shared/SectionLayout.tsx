import { cn } from "@/lib/utils";
import { ContainerProps } from "./Container";

const SectionLayout = ({ children, className }: ContainerProps) => {
  return (
    <section className={cn("pb-20 xl:pb-[150px] 3xl:pb-[200px]", className)}>
      {children}
    </section>
  );
};

export default SectionLayout;
