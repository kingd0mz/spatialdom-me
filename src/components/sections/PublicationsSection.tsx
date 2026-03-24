import { Reveal } from '../motion/Reveal';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { publications } from '../../data/site';

export function PublicationsSection() {
  return (
    <Section id="publications">
      <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">
        <Reveal>
          <SectionHeader
            label="Selected Publications"
            title="Research and technical writing grounded in implementation."
            description="A selected set spanning remote sensing, digital twins, spatial analysis, and public access to space data."
          />
        </Reveal>

        <div className="grid gap-3">
          {publications.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.04}
              className="theme-card rounded-[1.35rem] px-5 py-5 sm:px-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-[720px]">
                  <p className="text-[0.74rem] uppercase tracking-[0.22em] text-text-muted">
                    {item.year} · {item.tag}
                  </p>
                  <h3 className="mt-3 text-[1.05rem] font-medium leading-7 tracking-[-0.02em] text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-text-body">{item.venue}</p>
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-link sm:mt-1"
                  >
                    DOI
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
