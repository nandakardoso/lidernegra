export type Canal = "whatsapp" | "email" | "instagram" | "linkedin";

const tracos = {
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/** Ícones de contorno em traço único, no mesmo peso, para os canais de contato. */
export function IconeCanal({ canal, className = "h-6 w-6" }: { canal: Canal; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" className={className} {...tracos}>
      {canal === "whatsapp" && (
        <>
          <path d="M3.5 20.5l1.2-4.3A8.5 8.5 0 1 1 8 19.4l-4.5 1.1z" />
          <path d="M9 8.5c0 3.6 2.9 6.5 6.5 6.5l1-1.6-2-1-1 .8a4.2 4.2 0 0 1-2.2-2.2l.8-1-1-2L9 8.5z" />
        </>
      )}
      {canal === "email" && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
        </>
      )}
      {canal === "instagram" && (
        <>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
        </>
      )}
      {canal === "linkedin" && (
        <>
          <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
          <path d="M8 10.5V16M8 7.8v.01M11.5 16v-5.5M11.5 13c0-1.7 1-2.7 2.5-2.7s2 1 2 2.4V16" />
        </>
      )}
    </svg>
  );
}
