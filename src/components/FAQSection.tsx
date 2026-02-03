import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does drain cleaning cost in Arvada?",
    answer: "Most residential drain cleaning services in Arvada range from $125 to $350, depending on the severity and location of the clog. We provide upfront pricing before any work begins, so there are no surprises. Emergency and after-hours services may have additional fees."
  },
  {
    question: "How quickly can you respond to a drain emergency?",
    answer: "We offer 60-minute emergency response throughout Arvada and surrounding areas. Our technicians are strategically located to reach you fast, 24 hours a day, 7 days a week. For non-emergencies, we typically offer same-day or next-day appointments."
  },
  {
    question: "What causes most drain clogs in Arvada homes?",
    answer: "The most common causes are: grease and food buildup in kitchen drains, hair and soap scum in bathroom drains, tree root intrusion in sewer lines, and mineral buildup from Arvada's hard water. Regular maintenance can prevent 90% of drain emergencies."
  },
  {
    question: "Do you offer any warranties on drain cleaning?",
    answer: "Yes! We stand behind our work with a 30-day satisfaction guarantee on all drain cleaning services. If the same drain clogs again within 30 days, we'll return and clear it at no additional charge. Our sewer line services come with an extended 90-day warranty."
  },
  {
    question: "Is it better to use chemical drain cleaners or call a professional?",
    answer: "We strongly recommend professional cleaning over chemical drain cleaners. Chemical products can damage pipes, are harmful to the environment, and often only provide temporary relief. Our hydro-jetting and mechanical cleaning methods are safer and more effective long-term."
  },
  {
    question: "Do you service commercial properties in Arvada?",
    answer: "Absolutely. We work with restaurants, office buildings, retail stores, and industrial facilities throughout Arvada. We understand that drain issues can impact your business, which is why we offer flexible scheduling including after-hours service to minimize disruption."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium uppercase tracking-widest text-sm">FAQ</span>
          <h2 className="font-display text-fluid-4xl mt-2 mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Got questions about drain cleaning in Arvada? We've got answers.
          </p>
        </div>
        
        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-sm px-6 data-[state=open]:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left font-display text-lg hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Still have questions */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a href="tel:+17205551234" className="text-primary font-medium hover:underline text-lg">
            Call (720) 555-1234 — We're happy to help!
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
