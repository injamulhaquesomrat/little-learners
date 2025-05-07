import { ntpItems } from "@/fakedata/ntpItems";
import NTPCard from "./NTPCard";

const NTPContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {ntpItems.map((ntp) => (
        <NTPCard key={ntp?.id} ntp={ntp} />
      ))}
    </div>
  );
};

export default NTPContent;
