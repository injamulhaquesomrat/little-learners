import { historyTypes } from "@/types/histooryTypes";

const HistoryItem = ({ item }: { item: historyTypes }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-[30px] lg:gap-10 3xl:gap-[50px] w-5/6 sm:w-[90%] md:w-[92%] lg:w-[95%] ml-auto relative">
      <div className="flex gap-5 items-center justify-around px-6 py-5 rounded-[10px] border-2 border-border shadow-light-shadow w-fit md:w-2/6 lg:w-2/8 xl:w-3/12 relative">
        {/* start::horizontal line with both side circle ring */}
        <img
          className="absolute -left-3 z-10"
          src="/assets/icons/history/circle-ring.svg"
          alt="circle ring"
        />
        <img
          className="absolute -left-12 z-10"
          src="/assets/icons/history/circle-ring.svg"
          alt="circle ring"
        />
        <div className="pt-1.5 px-1 bg-[var(--orange-80)] absolute -left-8">
          <hr className="w-4 border-t-2 pt-1 bg-[var(--orange-80)]" />
        </div>
        {/* end::horizontal line with both side circle ring */}

        {/* start::year card text*/}
        <img
          src="/assets/icons/history/square-bricks.svg"
          alt="square bricks"
        />
        <h3 className="text-[38px] xl:text-5xl 3xl:text-[68px] font-bold font-raleway leading-snug text-[var(--grey-10)]">
          {item?.year}
        </h3>
        {/* end::year card text*/}
      </div>
      {/* start::verticle line */}
      <div
        className={`absolute top-[50px] md:top-[85px] lg:top-[70px] xl:top-[63px] ${
          item?.id === 4 ? "h-0" : "h-[114%] md:h-[124%] xl:h-[160%]"
        } -left-10 pl-1.5 pr-1 bg-[var(--orange-80)]`}
      >
        <svg
          className="h-full w-0.5"
          width="1"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="1" y1="0" x2="1" y2="100%" stroke="black" strokeWidth="2" />
        </svg>
      </div>
      {/* end::verticle line */}

      {/* start::history text content */}
      <div className="md:w-4/6 lg:w-6/8 xl:w-9/12">
        <h5 className="text-[22px] xl:text-2xl 3xl:text-[28px] font-bold font-raleway leading-snug pb-3 text-[var(--grey-10)]">
          {item?.headline}
        </h5>
        <p className="font-medium 3xl:text-xl text-[var(--grey-20)]">
          {item?.description}
        </p>
      </div>
      {/* start::history text content */}
    </div>
  );
};

export default HistoryItem;
