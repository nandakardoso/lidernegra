import { faqItems } from "../data/faq";
import { Accordion } from "../components/Accordion";

export function Faq() {
  return (
    <section className="bg-cream-100 py-24">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <h2 className="font-display text-3xl italic text-wine-900 md:text-4xl">Perguntas frequentes</h2>
        <div className="mt-10">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
