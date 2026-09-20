import { faqItems } from "../data/faq";
import { Accordion } from "../components/Accordion";

export function Faq() {
  return (
    <section className="bg-cream-100 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
