import { Reveal } from '../motion/Reveal';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { affiliations } from '../../data/site';

export function AffiliationsSection() {
  return (
    <Section id="affiliations">
      <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">
        <Reveal>
          <SectionHeader
            label="Affiliations"
            title="Professional and academic communities that anchor the practice."
          />
        </Reveal>

        <div className="grid gap-3">
          {affiliations.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 0.04}
              className="theme-card rounded-[1.25rem] px-5 py-4 sm:px-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <p className="text-[1rem] font-medium tracking-[-0.02em] text-text-primary">{item.name}</p>
                <p className="max-w-[520px] text-sm leading-7 text-text-body">{item.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
