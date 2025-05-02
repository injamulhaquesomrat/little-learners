import { faqData } from "@/fakedata/faqItems";
import { useState } from "react";
import FaqAccordion from "./FaqAccordion";

const FaqContent = () => {
  const [openItem, setOpenItem] = useState<number>(faqData[0]?.id ?? 0);

  const toggleAccordion = (id: number) => {
    setOpenItem((prev) => (prev === id ? faqData[0]?.id : id));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-10 3xl:gap-[50px]">
      <div className="grid grid-cols-1 gap-5 h-fit">
        {faqData.slice(0, 4).map((faq) => (
          <FaqAccordion
            key={faq?.id}
            faq={faq}
            openItem={openItem}
            toggleAccordion={toggleAccordion}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 h-fit">
        {faqData.slice(4, 8).map((faq) => (
          <FaqAccordion
            key={faq?.id}
            faq={faq}
            openItem={openItem}
            toggleAccordion={toggleAccordion}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqContent;
