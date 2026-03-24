type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-[720px]">
      <p className="section-label">{label}</p>
      <h2 className="mt-4 text-[clamp(1.45rem,2.8vw,2.2rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-text-primary">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-[640px] text-[1rem] leading-7 text-text-body sm:text-[1.03rem]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
