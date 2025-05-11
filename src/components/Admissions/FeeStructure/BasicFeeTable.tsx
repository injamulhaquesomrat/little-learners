const BasicFeeTable = () => {
  return (
    <div className="bg-white p-[30px] lg:p-10 xl:p-[50px] 3xl:p-[60px] shadow-shadow rounded-[10px] border-2 border-border fee-structure">
      <div className="overflow-auto w-full text-lg 3xl:text-xl font-medium">
        <div className="w-full">
          <ul className="flex divide-x-2 mb-[30px] border-2 border-border rounded-[10px] divide-border w-fit lg:w-full bg-secondary-background">
            <li className="px-[30px] py-[18px] text-nowrap w-[220px] lg:w-1/5">
              Program
            </li>
            <li className="px-[30px] py-[18px] text-nowrap w-[220px] lg:w-1/5">
              Age Group
            </li>
            <li className="px-[30px] py-[18px] text-nowrap w-[220px] lg:w-1/5">
              Annual Tuition
            </li>
            <li className="px-[30px] py-[18px] text-nowrap w-[220px] lg:w-1/5">
              Registration Fee
            </li>
            <li className="px-[30px] py-[18px] text-nowrap w-[220px] lg:w-1/5">
              Activity Fee
            </li>
          </ul>

          <div className="border-2  border-border rounded-[10px] w-fit lg:w-full flex flex-col bg-background">
            {basicFeeItems.map((item) => (
              <ul
                key={item?.id}
                className="flex divide-x-2 divide-border w-fit lg:w-full"
              >
                <li
                  className={`px-[30px] py-[18px] border-border text-nowrap w-[220px] lg:w-1/5 ${
                    item?.id === 3 ? "border-b-0" : "border-b-2"
                  }`}
                >
                  {item?.program}
                </li>
                <li
                  className={`px-[30px] py-[18px] border-border text-nowrap w-[220px] lg:w-1/5 ${
                    item?.id === 3 ? "border-b-0" : "border-b-2"
                  }`}
                >
                  {item?.ageGroup}
                </li>
                <li
                  className={`px-[30px] py-[18px] border-border text-nowrap w-[220px] lg:w-1/5 ${
                    item?.id === 3 ? "border-b-0" : "border-b-2"
                  }`}
                >
                  {item?.annualTuition}
                </li>
                <li
                  className={`px-[30px] py-[18px] border-border text-nowrap w-[220px] lg:w-1/5 ${
                    item?.id === 3 ? "border-b-0" : "border-b-2"
                  }`}
                >
                  {item?.registration}
                </li>
                <li
                  className={`px-[30px] py-[18px] border-border text-nowrap w-[220px] lg:w-1/5 ${
                    item?.id === 3 ? "border-b-0" : "border-b-2"
                  }`}
                >
                  {item?.activityFee}
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

export default BasicFeeTable;

const basicFeeItems = [
  {
    id: 1,
    program: "Nursery",
    ageGroup: "2-3 Years",
    annualTuition: "$1,686",
    registration: "$162",
    activityFee: "$12",
  },
  {
    id: 2,
    program: "Pre-Kindergartens",
    ageGroup: "3-4 Years",
    annualTuition: "$2,686",
    registration: "$220",
    activityFee: "$16",
  },
  {
    id: 3,
    program: "Kindergarten",
    ageGroup: "4-5 Years",
    annualTuition: "$3,686",
    registration: "$340",
    activityFee: "$20",
  },
];
