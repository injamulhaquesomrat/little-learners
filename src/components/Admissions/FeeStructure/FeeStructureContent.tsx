import AdditionalFeeTable from "./AdditionalFeeTable";
import BasicFeeTable from "./BasicFeeTable";

const FeeStructureContent = () => {
  return (
    <div className="flex flex-col gap-[30px] md:gap-10 lg:gap-[50px] xl:gap-[60px] 3xl:gap-20">
      {/* start::basic fee table */}
      <BasicFeeTable />
      {/* end::basic fee table */}

      {/* start::additional fee table */}
      <AdditionalFeeTable />
      {/* end::additional fee table */}
    </div>
  );
};

export default FeeStructureContent;
