export const FormRow = ({ children }: { children: React.ReactNode }) => (
  <div className="grid md:grid-cols-2 gap-[30px] xl:gap-10 3xl:gap-[50px]">
    {children}
  </div>
);
