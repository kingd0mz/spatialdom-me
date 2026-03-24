import { motion, useReducedMotion } from 'framer-motion';
import { Section } from '../Section';
import { profile } from '../../data/site';

const heroMeta = ['Philippines', 'Geomatics Engineer', 'Smart City / EO / WebGIS'];

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
            className="mt-5 max-w-full whitespace-nowrap text-[clamp(1.7rem,7vw,4.35rem)] font-semibold leading-[0.94] tracking-[-0.075em] text-text-primary"
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
            Systems architecture across smart regions, earth observation, digital twins, and public-sector geospatial infrastructure.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={profile.cvPath}
              download
              className="interactive-accent inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="interactive-ghost inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
            >
              Contact
            </a>
            <a
              href={profile.spatialdom}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full px-2 py-3 text-sm font-medium text-link"
            >
              Visit Spatialdom
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {heroMeta.map((item) => (
              <span
                key={item}
                className="theme-chip px-3 py-2 text-[0.78rem] uppercase tracking-[0.2em] text-text-secondary"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-3 text-sm text-text-body sm:grid-cols-3">
            <div data-cursor="card" className="theme-card rounded-2xl px-4 py-3">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-text-muted">Base</p>
              <p className="mt-2 text-text-secondary">{profile.location}</p>
            </div>
            <div data-cursor="card" className="theme-card rounded-2xl px-4 py-3">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-text-muted">Email</p>
              <a href={`mailto:${profile.email}`} className="mt-2 block text-link">
                {profile.email}
              </a>
            </div>
            <div data-cursor="card" className="theme-card rounded-2xl px-4 py-3">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-text-muted">Ecosystem</p>
              <a href={profile.spatialdom} target="_blank" rel="noreferrer" className="mt-2 block text-link">
                spatialdom.xyz
              </a>
            </div>
          </div>

          <div data-cursor="card" className="system-panel mt-8 rounded-[1.45rem] p-5 pt-9 lg:hidden">
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
          className="system-panel hidden rounded-[1.6rem] p-6 pt-10 sm:p-7 sm:pt-10 lg:block"
          data-cursor="card"
        >
          <div className="space-y-6">
            <div>
              <p className="text-[0.74rem] uppercase tracking-[0.22em] text-text-muted">Current Focus</p>
              <p className="mt-3 text-[1.06rem] leading-7 text-text-secondary">
                Smart regions, earth observation platforms, digital infrastructure, and public-sector geospatial systems.
              </p>
            </div>

            <div className="definition-frame py-5">
              <p className="text-[0.74rem] uppercase tracking-[0.22em] text-text-muted">Operating Layer</p>
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
