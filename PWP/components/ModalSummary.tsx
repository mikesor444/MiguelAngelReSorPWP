type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  body: string;
  bullets: string[];
};

export function ModalSummary({
  open,
  onClose,
  title,
  body,
  bullets,
}: ModalProps) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="print:hidden fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur"
      onClick={onClose}
    >
      <div
        className="relative max-h-[80vh] w-[min(680px,92vw)] overflow-y-auto rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-white/10 px-6 py-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
              Profile
            </p>
            <h2 className="text-2xl font-semibold text-white">{title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close summary"
            className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/90 transition hover:border-cyan-300 hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            Close ✕
          </button>
        </div>
        <div className="mt-4 space-y-3 text-base leading-relaxed text-white/90">
          <p>{body}</p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-white/80">
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
