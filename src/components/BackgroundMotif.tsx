export function BackgroundMotif() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.14]">
        <div className="grid-motif mask-fade absolute inset-x-0 top-0 h-[52rem]" />
      </div>

      <svg
        className="absolute right-[-12%] top-[8rem] h-[34rem] w-[34rem] opacity-[0.18] blur-[0.2px]"
        viewBox="0 0 560 560"
        fill="none"
      >
        <path
          d="M64 482L140 338L228 362L306 215L394 249L480 92"
          stroke="var(--motif-accent)"
          strokeWidth="1.2"
        />
        <path d="M92 456L172 292L254 314L340 178L430 208" stroke="var(--motif-line)" strokeWidth="1" />
        <circle cx="140" cy="338" r="4" fill="var(--motif-line)" />
        <circle cx="306" cy="215" r="5" fill="var(--motif-accent)" />
        <circle cx="480" cy="92" r="5" fill="var(--motif-line)" />
      </svg>

      <svg
        className="absolute left-[-6rem] top-[30rem] h-[22rem] w-[22rem] opacity-[0.14]"
        viewBox="0 0 360 360"
        fill="none"
      >
        <rect x="42" y="42" width="276" height="276" rx="18" stroke="var(--motif-line)" />
        <path d="M42 180H318M180 42V318" stroke="var(--motif-line)" />
        <path d="M96 276L150 222L196 244L270 168" stroke="var(--motif-accent)" strokeWidth="1.15" />
      </svg>
    </div>
  );
}
