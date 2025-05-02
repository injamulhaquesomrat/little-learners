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

const FaqAccordion = ({
  faq,
  openItem,
  toggleAccordion,
}: FaqAccordionProps) => {
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
              {openItem !== faq.id ? (
                // {/* plus icons */}
                <img
                  className={`transition-transform duration-500 ${
                    openItem === faq.id ? "scale-0" : "scale-100"
                  }`}
                  src="/public/assets/icons/faq/plus-icon.svg"
                  alt="plus icon"
                />
              ) : (
                // {/* minus icons */}
                <img
                  className={`transition-transform duration-500 ${
                    openItem === faq.id ? "scale-100" : "scale-0"
                  }`}
                  src="/public/assets/icons/faq/minus-icon.svg"
                  alt="miinus icon"
                />
              )}
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
