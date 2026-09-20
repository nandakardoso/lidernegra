import { IconeCanal, type Canal } from "../components/IconeCanal";
import { PageHero } from "../components/PageHero";
import { contato } from "../data/contato";
import {
  beneficios,
  notaLocalizacao,
  notaProcesso,
  prerequisitos,
  processoSelecao,
  publicoPrograma,
} from "../data/prerequisitos";

const canais: { canal: Canal; nome: string; detalhe?: string; acao: string; href: string; externo: boolean }[] = [
  { canal: "whatsapp", nome: "WhatsApp", acao: "Falar com a equipe", href: contato.whatsapp, externo: true },
  { canal: "email", nome: "E-mail", detalhe: contato.email, acao: "Escrever para a equipe", href: `mailto:${contato.email}`, externo: false },
  { canal: "instagram", nome: "Instagram", detalhe: "@lidernegraoficial", acao: "Seguir no Instagram", href: contato.instagram, externo: true },
  { canal: "linkedin", nome: "LinkedIn", acao: "Acompanhar no LinkedIn", href: contato.linkedin, externo: true },
];

export function Inscricao() {
  return (
    <>
      <PageHero kicker="Próxima edição" titulo="As inscrições estão fechadas no momento">
        Veja quem pode participar e como saber quando a próxima edição abre.
      </PageHero>

      <section className="mx-auto max-w-3xl px-6 pt-24 md:px-10">
        <h2 className="font-display text-2xl italic text-wine-900 md:text-3xl">Por que participar?</h2>
        <ul className="mt-8 space-y-4">
          {beneficios.map((item) => (
            <li key={item} className="flex gap-4 font-sans text-lg leading-relaxed text-ink-700">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-24 md:px-10">
        <h2 className="font-display text-2xl italic text-wine-900 md:text-3xl">Pré-requisitos</h2>
        <p className="mt-4 font-sans text-lg leading-relaxed text-ink-700">{publicoPrograma}</p>
        <ul className="mt-8 space-y-4">
          {prerequisitos.map((item) => (
            <li key={item} className="flex gap-4 font-sans text-base leading-relaxed text-ink-700">
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-sans text-base leading-relaxed text-ink-700">{notaLocalizacao}</p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-24 md:px-10">
        <h2 className="font-display text-2xl italic text-wine-900 md:text-3xl">Como funciona a seleção</h2>
        <ol className="mt-8 space-y-4">
          {processoSelecao.map((item) => (
            <li key={item} className="flex gap-4 font-sans text-base leading-relaxed text-ink-700">
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ol>
        <p className="mt-8 font-sans text-sm leading-relaxed text-ink-500">{notaProcesso}</p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 md:px-10">
        <h2 className="font-display text-2xl italic text-wine-900 md:text-3xl">Como saber quando abrir</h2>
        <p className="mt-4 font-sans text-lg leading-relaxed text-ink-700">
          As inscrições abrem a cada edição. Na 6ª edição, em 2026, mais de 750 mulheres se inscreveram. Os
          anúncios de abertura saem nas redes do programa, e a equipe responde dúvidas pelo WhatsApp.
        </p>

        <ul className="mt-10">
          {canais.map((c) => (
            <li key={c.canal} className="border-t border-wine-900/15 last:border-b">
              <a
                href={c.href}
                {...(c.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-5 py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-wine-900 text-gold-400 transition-colors group-hover:bg-wine-800">
                  <IconeCanal canal={c.canal} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-xl text-wine-900">{c.nome}</span>
                  {c.detalhe && <span className="block break-words font-sans text-base text-ink-700">{c.detalhe}</span>}
                  <span className="mt-1 block font-sans text-sm font-semibold uppercase tracking-[0.08em] text-wine-800 underline decoration-gold-500 decoration-2 underline-offset-8 group-hover:decoration-4">
                    {c.acao}
                    {c.externo && <span className="sr-only"> (abre em nova aba)</span>}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
