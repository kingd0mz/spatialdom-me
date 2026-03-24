import { Reveal } from '../motion/Reveal';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { contactLinks, profile } from '../../data/site';

export function ContactSection() {
  return (
    <Section id="contact">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-10">
        <Reveal data-cursor="card" className="theme-card rounded-[1.7rem] p-6 sm:p-8">
          <SectionHeader
            label="Contact"
            title="Available for collaborations, research, systems work, and speaking engagements."
            description="For partnerships around geospatial systems, smart city infrastructure, remote sensing applications, and institutional capacity building."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={profile.cvPath}
              download
              className="interactive-accent inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
            >
              Download CV
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="interactive-ghost inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
            >
              Email Dominic
            </a>
          </div>
        </Reveal>

        <Reveal data-cursor="card" delay={0.1} className="system-panel rounded-[1.7rem] p-6 pt-10 sm:p-7 sm:pt-10">
          <p className="text-[0.74rem] uppercase tracking-[0.22em] text-text-muted">Direct Line</p>
          <div className="mt-5 grid gap-4">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                data-cursor="card"
                className="theme-card rounded-[1.2rem] px-4 py-4 transition hover:border-border-hover hover:bg-surface-hover"
              >
                <p className="text-[0.72rem] uppercase tracking-[0.22em] text-text-muted">{item.label}</p>
                <p className="mt-2 text-sm leading-7 text-text-secondary">{item.value}</p>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
