type historyTypes = {
  id: number;
  year: number;
  headline: string;
  description: string;
};

const HistoryItem = ({ item }: { item: historyTypes }) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex gap-5 items-center px-6 py-5 rounded-[10px] border-2 border-border shadow-light-shadow w-fit">
        <img
          src="/assets/icons/history/square-bricks.svg"
          alt="square bricks"
        />
        <h3 className="text-[38px] font-bold font-raleway leading-snug">
          {item?.year}
        </h3>
      </div>
      <div>
        <h5 className="text-[22px] font-bold font-raleway leading-snug pb-3">
          {item?.headline}
        </h5>
        <p className="font-medium">{item?.description}</p>
      </div>
    </div>
  );
};

export default HistoryItem;
