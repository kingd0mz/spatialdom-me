import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Container } from './Container';
import { navItems, profile } from '../data/site';

export function Navbar() {
  const shouldReduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onHashChange = () => setMobileOpen(false);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <div className={`nav-shell mt-4 rounded-xl px-4 py-3 sm:px-5 ${scrolled ? 'is-scrolled' : ''}`}>
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="min-w-0">
              <span className="block truncate text-sm font-semibold text-text-primary">
                Dominic Fargas Jr.
              </span>
              <span className="mt-0.5 block truncate text-xs text-text-muted">
                me.spatialdom.xyz
              </span>
            </a>

            <nav aria-label="Main navigation" className="hidden items-center gap-4 lg:flex xl:gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="inline-flex min-h-11 items-center text-sm text-text-secondary transition-colors hover:text-accent">
                  {item.label}
                </a>
              ))}
              <a
                href={profile.spatialdom}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Spatialdom (opens in a new tab)"
                className="inline-flex min-h-11 items-center rounded-lg border border-border px-3 py-2 text-sm text-text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                Spatialdom ↗
              </a>
            </nav>

            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={profile.spatialdom}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Spatialdom (opens in a new tab)"
                className="theme-chip hidden min-h-11 items-center px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-border-hover hover:bg-surface-hover hover:text-accent sm:inline-flex"
              >
                Spatialdom ↗
              </a>

              <button
                type="button"
                className="theme-icon-button inline-flex h-11 w-11 items-center justify-center rounded-full"
                aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMobileOpen((value) => !value)}
              >
                <div className="relative h-3.5 w-4">
                  <span
                    className={`absolute left-0 top-0 h-px w-4 bg-current transition ${
                      mobileOpen ? 'translate-y-[6px] rotate-45' : ''
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[6px] h-px w-4 bg-current transition ${
                      mobileOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-3 h-px w-4 bg-current transition ${
                      mobileOpen ? '-translate-y-[6px] -rotate-45' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {mobileOpen ? (
              <motion.nav
                id="mobile-navigation"
                aria-label="Mobile navigation"
                initial={shouldReduceMotion ? false : { opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                exit={shouldReduceMotion ? {} : { opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="theme-mobile-nav overflow-hidden pt-4 lg:hidden"
              >
                <div className="grid gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="theme-mobile-link flex min-h-11 items-center px-4 py-3"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href={profile.spatialdom}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Spatialdom (opens in a new tab)"
                    className="theme-mobile-link flex min-h-11 items-center px-4 py-3"
                  >
                    Visit Spatialdom ↗
                  </a>
                </div>
              </motion.nav>
            ) : null}
          </AnimatePresence>
        </div>
      </Container>
    </header>
  );
}
