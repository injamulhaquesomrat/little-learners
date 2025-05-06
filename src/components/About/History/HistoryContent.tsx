import { historyItems } from "@/fakedata/historyItems";
import HistoryItem from "./HistoryItem";

const HistoryContent = () => {
  return (
    <div className="bg-white border-2 border-border shadow-light-shadow rounded-xl py-[50px] xl:p-[100px] 3xl:p-[150px] px-5 sm:px-[50px] relative">
      <div className="flex flex-col gap-[50px] xl:gap-20">
        {historyItems.map((item) => (
          <HistoryItem key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default HistoryContent;
