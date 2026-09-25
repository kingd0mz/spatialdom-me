import { Reveal } from '../motion/Reveal';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { contactLinks, profile } from '../../data/site';

export function ContactSection() {
  return (
    <Section id="contact">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-10">
        <Reveal className="theme-card rounded-xl p-6 sm:p-8">
          <SectionHeader
            label="Contact"
            title="Available for collaborations, research, systems work, and speaking engagements."
            description="For partnerships around geospatial systems, smart city infrastructure, remote sensing applications, and institutional capacity building."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={profile.cvPath}
              download
              className="interactive-accent px-6"
            >
              Download CV
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="interactive-ghost px-6"
            >
              Email Dominic
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="system-panel rounded-xl p-6 sm:p-7">
          <p className="text-[0.74rem] uppercase tracking-[0.22em] text-text-muted">Contact Details</p>
          <div className="mt-5 grid gap-4">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={item.href.startsWith('http') ? `${item.label}: ${item.value} (opens in a new tab)` : undefined}

                className="theme-card rounded-xl px-4 py-4 transition-colors hover:border-border-hover hover:bg-surface-hover"
              >
                <p className="text-[0.72rem] uppercase tracking-[0.22em] text-text-muted">{item.label}</p>
                <p className="mt-2 break-words text-sm leading-7 text-text-secondary">{item.value}{item.href.startsWith('http') ? ' ↗' : ''}</p>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
