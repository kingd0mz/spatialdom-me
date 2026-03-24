import { Reveal } from '../motion/Reveal';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { credentialHighlights, credentials } from '../../data/site';

export function CredentialsSection() {
  return (
    <Section id="credentials">
      <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">
        <Reveal>
          <SectionHeader
            label="Credentials"
            title="A concise signal of role, standing, and depth."
          />
        </Reveal>

        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            {credentials.map((item, index) => (
              <Reveal
                key={item.label}
                delay={index * 0.06}
                data-cursor="card"
                className="theme-card rounded-[1.45rem] p-5 sm:p-6"
              >
                <p className="text-[0.74rem] uppercase tracking-[0.22em] text-text-muted">{item.label}</p>
                <p className="mt-4 text-[1.02rem] font-medium leading-7 tracking-[-0.02em] text-text-primary">
                  {item.value}
                </p>
                <p className="mt-3 text-sm leading-7 text-text-body">{item.detail}</p>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.18}
            data-cursor="card"
            className="system-panel rounded-[1.45rem] p-5 pt-10 sm:p-6 sm:pt-10"
          >
            <p className="text-[0.74rem] uppercase tracking-[0.22em] text-text-muted">Selected Signals</p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {credentialHighlights.map((item) => (
                <div
                  key={item}
                  data-cursor="card"
                  className="theme-card rounded-[1.2rem] px-4 py-4 text-sm leading-6 text-text-secondary"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
