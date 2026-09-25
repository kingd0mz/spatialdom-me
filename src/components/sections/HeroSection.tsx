import { motion, useReducedMotion } from 'framer-motion';
import { Section } from '../Section';
import { profile } from '../../data/site';

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="top" divider={false} className="pb-14 pt-24 sm:pt-28 lg:pb-24 lg:pt-36">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-14">
        <div>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="section-label"
          >
            Personal Digital CV
          </motion.p>

          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-[820px] text-[clamp(2.4rem,7vw,4.35rem)] font-bold leading-[1.04] tracking-[-0.045em] text-text-primary"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-[clamp(1.06rem,2vw,1.34rem)] font-medium leading-[1.4] tracking-[-0.03em] text-text-secondary"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-[720px] text-[clamp(1.1rem,2.1vw,1.52rem)] leading-[1.5] text-text-secondary"
          >
            {profile.statement}
          </motion.p>

          <p className="mt-4 max-w-[620px] text-sm leading-7 text-text-body sm:text-base">
            Building practical systems for land, property, environmental monitoring, and public decisions.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={profile.cvPath}
              download
              className="interactive-accent px-6"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="interactive-ghost px-6"
            >
              Contact
            </a>
            <a
              href={profile.spatialdom}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Spatialdom (opens in a new tab)"
              className="inline-flex min-h-11 items-center justify-center px-2 py-3 text-sm font-medium text-link"
            >
              Visit Spatialdom ↗
            </a>
          </div>

          <div className="system-panel mt-8 p-5 lg:hidden">
            <p className="text-[0.74rem] uppercase tracking-[0.22em] text-text-muted">Current Focus</p>
            <p className="mt-3 text-[1rem] leading-7 text-text-secondary">
              Smart regions, earth observation platforms, digital infrastructure, and institutional capacity building.
            </p>
          </div>
        </div>

        <motion.aside
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="system-panel hidden p-6 sm:p-7 lg:block"
        >
          <div className="space-y-6">
            <div>
              <p className="text-[0.74rem] uppercase tracking-[0.22em] text-text-muted">Current Focus</p>
              <p className="mt-3 text-[1.06rem] leading-7 text-text-secondary">
                Smart regions, earth observation platforms, digital infrastructure, and public-sector geospatial systems.
              </p>
            </div>

            <div className="definition-frame py-5">
              <p className="text-[0.74rem] uppercase tracking-[0.22em] text-text-muted">What I Do</p>
              <p className="mt-3 text-[1.16rem] leading-8 tracking-[-0.03em] text-text-primary">
                Architecture, implementation, research, and institutional capacity building.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <p className="text-[0.74rem] uppercase tracking-[0.22em] text-text-muted">Email</p>
                <a href={`mailto:${profile.email}`} className="mt-2 block text-sm text-link">
                  {profile.email}
                </a>
              </div>
              <div>
                <p className="text-[0.74rem] uppercase tracking-[0.22em] text-text-muted">Domain</p>
                <p className="mt-2 text-sm text-text-secondary">me.spatialdom.xyz</p>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </Section>
  );
}
