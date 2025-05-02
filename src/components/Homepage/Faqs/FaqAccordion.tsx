import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqType } from "@/types/faqTypes";

type FaqAccordionProps = {
    faq: FaqType;
    openItem: number;
    toggleAccordion: (id: number) => void;
  };
  

const FaqAccordion = ({ faq, openItem, toggleAccordion }: FaqAccordionProps) => {
  return (
    <div key={faq?.id}>
      <Accordion
        type="single"
        collapsible
        className="w-full h-full"
        value={`item-${openItem}`}
      >
        <AccordionItem
          className="shadow-transparent border-2 border-border px-6 xl:px-[30px] 3xl:px-10 py-5 xl:py-6 3xl:py-[34px] data-[state=open]:py-[30px] xl:data-[state=open]:py-[34px] 3xl:data-[state=open]:py-10 bg-secondary-background data-[state=open]:bg-white"
          value={`item-${faq?.id}`}
        >
          <AccordionTrigger
            onClick={() => toggleAccordion(faq?.id)}
            className="p-0 bg-secondary-background data-[state=open]:bg-white data-[state=open]:pb-5 gap-5 cursor-pointer"
          >
            <span className="text-lg font-semibold text-[var(--grey-15)]">
              {faq?.question}
            </span>
            <div className="h-8 w-8 3xl:h-10 3xl:w-10 flex items-center justify-center rounded-sm border-2 border-border p-1.5 bg-background">
              {
                openItem !== faq.id ? (
                  // {/* plus icons */}
                  <svg
                    className={`transition-transform duration-500 ${
                      openItem === faq.id ? "scale-0" : "scale-100"
                    }`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4.5V19.5M19.5 12L4.5 12"
                      stroke="#1A1A1A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  // {/* plus icons */}
                  // {/* minus icons */}
                  <svg
                    className={`transition-transform duration-500 ${
                      openItem === faq.id ? "scale-100" : "scale-0"
                    }`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 12L6 12"
                      stroke="#1A1A1A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )
                // {/* minus icons */}
              }
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0 bg-white data-[state=open]:bg-secondary-background pt-5 text-base">
            {faq?.answer}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
