import { faqItems } from "../data/faq";
import { Accordion } from "../components/Accordion";

export function Faq() {
  return (
    <section className="bg-cream-100 py-24">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
