import { Reveal } from '../motion/Reveal';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { engagements } from '../../data/site';

export function EngagementsSection() {
  return (
    <Section id="engagements">
      <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">
        <Reveal>
          <SectionHeader
            label="Speaking and Training"
            title="Technical engagement beyond system delivery."
            description="Selected roles across speaking, institutional training, mentoring, and academic-community exchange."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {engagements.map((group, index) => (
            <Reveal
              key={group.label}
              delay={index * 0.08}
              className="rounded-[1.45rem] border border-border bg-white/[0.025] p-5 sm:p-6"
            >
              <p className="text-[0.74rem] uppercase tracking-[0.22em] text-text-muted">{group.label}</p>
              <div className="mt-5 grid gap-4">
                {group.items.map((item) => (
                  <p key={item} className="border-t border-border pt-4 text-sm leading-7 text-text-body">
                    {item}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
