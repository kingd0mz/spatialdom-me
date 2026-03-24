import { Reveal } from '../motion/Reveal';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { selectedWork } from '../../data/site';

export function WorkSection() {
  return (
    <Section id="work">
      <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">
        <Reveal>
          <SectionHeader
            label="Selected Work"
            title="Systems, platforms, and outputs shaped around operational geospatial use."
          />
        </Reveal>

        <div className="grid gap-4">
          {selectedWork.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 0.05}
              className="system-panel rounded-[1.5rem] p-5 pt-10 sm:p-6 sm:pt-10"
            >
              <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-10">
                <div>
                  <p className="text-[0.74rem] uppercase tracking-[0.22em] text-text-muted">{item.role}</p>
                  <h3 className="mt-4 text-[1.2rem] font-medium leading-7 tracking-[-0.03em] text-text-primary">
                    {item.name}
                  </h3>
                </div>

                <div>
                  <p className="text-[0.99rem] leading-7 text-text-body">{item.description}</p>
                  <p className="mt-4 text-[0.99rem] leading-7 text-text-secondary">{item.impact}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="theme-chip px-3 py-1.5 text-[0.72rem] uppercase tracking-[0.18em] text-text-secondary"
                      >
                        {tag}
                      </span>
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
