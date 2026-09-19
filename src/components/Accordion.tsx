import { useState } from "react";
import type { FaqItem } from "../data/faq";

export function Accordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-wine-900/15 border-y border-wine-900/15">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.pergunta}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left font-sans text-base font-medium text-wine-900 md:text-lg"
              >
                {item.pergunta}
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-xl text-gold-600 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-6 pr-10 font-sans text-sm leading-relaxed text-ink-700 md:text-base"
            >
              {item.resposta}
            </div>
          </div>
        );
      })}
    </div>
  );
}
