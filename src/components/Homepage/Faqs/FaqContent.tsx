import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const FaqContent = () => {
  const [openItem, setOpenItem] = useState<number>(faqData[0]?.id ?? 0);

  const toggleAccordion = (id: number) => {
    setOpenItem((prev) => (prev === id ? faqData[0]?.id : id));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-[50px]">
      <div className="grid grid-cols-1 gap-5 h-fit">
        {faqData.slice(0, 4).map((faq) => (
          <div key={faq?.id}>
            <Accordion
              type="single"
              collapsible
              className="w-full h-full"
              value={`item-${openItem}`}
            >
              <AccordionItem
                className="shadow-transparent border-2 border-border px-6 py-5 data-[state=open]:py-[30px] bg-secondary-background data-[state=open]:bg-white"
                value={`item-${faq?.id}`}
              >
                <AccordionTrigger
                  onClick={() => toggleAccordion(faq?.id)}
                  className="p-0 bg-secondary-background data-[state=open]:bg-white data-[state=open]:pb-5 gap-5 cursor-pointer"
                >
                  <span className="text-lg font-semibold text-[var(--grey-15)]">
                    {faq?.question}
                  </span>
                  <div className="h-8 w-8 flex items-center justify-center rounded-sm border-2 border-border p-1.5 bg-background">
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
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 h-fit">
        {faqData.slice(4, 8).map((faq) => (
          <div key={faq?.id}>
            <Accordion
              type="single"
              collapsible
              className="w-full h-full"
              value={`item-${openItem}`}
            >
              <AccordionItem
                className="shadow-transparent border-2 border-border px-6 py-5 data-[state=open]:py-[30px] bg-secondary-background data-[state=open]:bg-white"
                value={`item-${faq?.id}`}
              >
                <AccordionTrigger
                  onClick={() => toggleAccordion(faq?.id)}
                  className="p-0 bg-secondary-background data-[state=open]:bg-white data-[state=open]:pb-5 gap-5 cursor-pointer"
                >
                  <span className="text-lg font-semibold text-[var(--grey-15)]">
                    {faq?.question}
                  </span>
                  <div className="h-8 w-8 flex items-center justify-center rounded-sm border-2 border-border p-1.5 bg-background">
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
                <AccordionContent className="p-0 bg-white data-[state=open]:bg-transparent pt-5">
                  {faq?.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqContent;

const faqData = [
  {
    id: 1,
    question: "What age groups does Little Learners cater to?",
    answer:
      "Little Learners typically accepts children from as young as 6 months to 5 years old.",
  },
  {
    id: 2,
    question: "What are the school hours and schedules?",
    answer:
      "The school may operate in sessions, such as January to December or April to March, with specific timings for morning and day classes.",
  },
  {
    id: 3,
    question: "What documents are required for enrollment?",
    answer:
      "A photocopy of the child's birth certificate, two recent photographs, and a completed admission form are usually required.",
  },
  {
    id: 4,
    question: "What curriculum does Little Learners follow?",
    answer:
      "The curriculum is often tailored to early childhood development, focusing on play-based learning and foundational skills.",
  },
  {
    id: 5,
    question: "Do you offer extracurricular activities?",
    answer:
      "Activities may include arts and crafts, outdoor play, and educational outings.",
  },
  {
    id: 6,
    question: "How are children grouped in classes?",
    answer:
      "Children are typically grouped by age, but factors like readiness, social-emotional development, and personality may also be considered.",
  },
  {
    id: 7,
    question: "Is there a waiting list for enrollment?",
    answer:
      "Yes, places may be allocated based on availability and a waiting list.",
  },
  {
    id: 8,
    question: "Do you provide meals or snacks?",
    answer:
      "Some schools may offer meals, while others require parents to pack lunches.",
  },
];
