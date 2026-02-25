"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Who is Lynq for?",
    answer:
      "Lynq is built for individuals and indie hackers who want to get things done instead of wasting time on complicated tools. If you're building something solo or with a small team, and you want a simple, fast way to manage tasks without all the bloat, Lynq is for you.",
  },
  {
    question: "Is Lynq free?",
    answer:
      "Yes! Lynq is completely free and open source. You can also self-host it on your own server.",
  },
  {
    question: "Do I need a team to use it?",
    answer:
      "Nope. While Lynq supports teams, it works great for solo projects too. Create your workspace, add projects, and start managing tasks. Invite others later if you want.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes. Lynq uses secure authentication and you can self-host it to keep your data on your own server. The code is open source, so you can verify everything yourself.",
  },
];

export default function FAQ() {
  return (
    <div className="w-full py-12 md:py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mb-3 md:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Everything you need to know about Lynq
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border/50"
            >
              <AccordionTrigger className="text-left text-base sm:text-lg font-medium py-4 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
