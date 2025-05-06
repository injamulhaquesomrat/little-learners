import SectionHeading from "@/components/shared/SectionHeading";
import HistoryContent from "./HistoryContent";

const History = () => {
  return (
    <section className="pb-20 xl:pb-[150px] 3xl:pb-[200px]">
      {/* start::section heading*/}
      <SectionHeading
        badgeText="Our Progressive Journey"
        title="Our History"
        subHeading="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
      />
      {/* end::section heading*/}

      {/* start::history content */}
      <HistoryContent />
      {/* end::history content */}
    </section>
  );
};

export default History;
