const AdditionalFeeTable = () => {
  return (
    <div className="bg-white p-[30px] lg:p-10 xl:p-[50px] 3xl:p-[60px] shadow-shadow rounded-[10px] border-2 border-border fee-structure">
      <div className="overflow-auto w-full text-lg 3xl:text-xl font-medium">
        <div className="w-fit md:w-full">
          <ul className="flex divide-x-2 mb-[30px] border-2 border-border rounded-[10px] divide-border w-full bg-secondary-background">
            <li className="px-[30px] py-[18px] text-nowrap w-full text-2xl 3xl:text-[30px]">
              Additional Services
            </li>
          </ul>

          <div className="border-2 border-border rounded-[10px] w-fit md:w-full flex flex-col bg-background">
            {additionalFeeItems.map((item) => (
              <ul
                key={item?.id}
                className="flex divide-x-2 divide-border w-fit md:w-full"
              >
                <li
                  className={`px-[30px] py-[18px] border-border text-nowrap w-[350px] md:w-1/2 ${
                    item?.id === 3 ? "border-b-0" : "border-b-2"
                  }`}
                >
                  {item?.program}
                </li>
                <li
                  className={`px-[30px] py-[18px] border-border text-nowrap w-[350px] md:w-1/2 ${
                    item?.id === 3 ? "border-b-0" : "border-b-2"
                  }`}
                >
                  {item?.fee}
                </li>
              </ul>
            ))}
          </div>
        </div>
        {/* fake space for the scrollbar */}
        <div className="h-5"></div>
      </div>
    </div>
  );
};

export default AdditionalFeeTable;

const additionalFeeItems = [
  {
    id: 1,
    program: "Before and After-School Care",
    fee: "$120/ per month",
  },
  {
    id: 2,
    program: "Language Immersion Program",
    fee: "$60/ per semester",
  },
  {
    id: 3,
    program: "Transportation (Optional)",
    fee: "$80/ per semester",
  },
];
