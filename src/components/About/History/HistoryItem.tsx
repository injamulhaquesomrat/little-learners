type historyTypes = {
  id: number;
  year: number;
  headline: string;
  description: string;
};

const HistoryItem = ({ item }: { item: historyTypes }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-[30px] lg:gap-10 w-5/6 md:w-[92%] lg:w-[95%] ml-auto relative">
      <div className="flex gap-5 items-center px-6 py-5 rounded-[10px] border-2 border-border shadow-light-shadow w-fit md:w-2/6 lg:w-2/8 relative">
        <img
          className="absolute -left-3 z-10"
          src="/public/assets/icons/history/circle-ring.svg"
          alt="circle ring"
        />
        <img
          className="absolute -left-12 z-10"
          src="/public/assets/icons/history/circle-ring.svg"
          alt="circle ring"
        />
        <div className="pt-1.5 px-1 bg-[var(--orange-80)] absolute -left-8">
          <hr className="w-4 border-t-2 pt-1.5 bg-[var(--orange-80)]" />
        </div>

        <img
          src="/assets/icons/history/square-bricks.svg"
          alt="square bricks"
        />
        <h3 className="text-[38px] font-bold font-raleway leading-snug">
          {item?.year}
        </h3>
      </div>
      <div
        className={`absolute top-[50px] md:top-[85px] lg:top-[70px] xl:top-[63px] ${
          item?.id === 4 ? "h-0" : "h-[114%] md:h-[124%] xl:h-[133%]"
        } -left-10.5 px-1.5 bg-[var(--orange-80)]`}
      >
        <svg
          className="h-full w-0.5"
          width="2"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="1" y1="0" x2="1" y2="100%" stroke="gray" strokeWidth="2" />
        </svg>
      </div>
      <div className="md:w-4/6 lg:w-6/8">
        <h5 className="text-[22px] font-bold font-raleway leading-snug pb-3">
          {item?.headline}
        </h5>
        <p className="font-medium">{item?.description}</p>
      </div>
    </div>
  );
};

export default HistoryItem;
