import { Reveal } from '../motion/Reveal';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { aboutCopy } from '../../data/site';

export function AboutSection() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
        <Reveal>
          <SectionHeader
            label="About"
            title="The human operating layer behind Spatialdom."
            description="A geospatial systems practice shaped around public value, field realities, and durable technical architecture."
          />
        </Reveal>

        <Reveal className="definition-frame px-0 py-6 sm:py-7" delay={0.1}>
          <div className="grid gap-6">
            {aboutCopy.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-[640px] text-[clamp(1.04rem,1.8vw,1.18rem)] leading-8 text-text-body"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
