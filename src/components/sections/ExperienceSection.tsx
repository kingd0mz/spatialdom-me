import { Reveal } from '../motion/Reveal';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { experience } from '../../data/site';

export function ExperienceSection() {
  return (
    <Section id="experience">
      <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">
        <Reveal>
          <SectionHeader
            label="Experience"
            title="A practice built through delivery, research, and public-sector implementation."
          />
        </Reveal>

        <div className="relative border-l border-border pl-5 sm:pl-8">
          {experience.map((entry, index) => (
            <Reveal
              key={`${entry.title}-${entry.org}`}
              delay={index * 0.05}
              className="relative border-b border-border pb-8 pt-1 last:border-b-0 last:pb-0"
            >
              <span className="absolute left-[-1.75rem] top-2.5 h-3 w-3 rounded-full border border-accent bg-background sm:left-[-2.38rem]" />
              <div className="grid gap-4 lg:grid-cols-[168px_minmax(0,1fr)] lg:gap-8">
                <div className="pt-1">
                  <p className="text-[0.74rem] uppercase tracking-[0.22em] text-text-muted">{entry.period}</p>
                </div>
                <div>
                  <p className="text-[1.14rem] font-medium tracking-[-0.03em] text-text-primary">{entry.title}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-text-muted">{entry.org}</p>
                  <div className="mt-4 grid gap-3">
                    {entry.summary.map((line) => (
                      <p key={line} className="text-[0.98rem] leading-7 text-text-body">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
