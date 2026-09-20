import type { ReactNode } from "react";

type Tamanho = "secundario" | "principal" | "destaque";
type Tom = "sobreClaro" | "sobreEscuro";

const tamanhos: Record<Tamanho, string> = {
  secundario: "text-2xl md:text-3xl",
  principal: "text-3xl md:text-4xl",
  destaque: "text-3xl md:text-5xl",
};

const tons: Record<Tom, string> = {
  sobreClaro: "text-wine-900",
  sobreEscuro: "text-cream-50",
};

interface TituloProps {
  as?: "h2" | "h3";
  tamanho?: Tamanho;
  tom?: Tom;
  className?: string;
  id?: string;
  children: ReactNode;
}

/** Título de seção: serifa itálica da marca. Um por seção; o tamanho comunica o nível. */
export function Titulo({ as: Tag = "h2", tamanho = "principal", tom = "sobreClaro", className = "", id, children }: TituloProps) {
  return (
    <Tag id={id} className={`text-balance font-display italic ${tamanhos[tamanho]} ${tons[tom]} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
