import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Container } from './Container';
import { navItems, profile } from '../data/site';

export function Navbar() {
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
        <div className={`nav-shell mt-4 rounded-[1.3rem] px-4 py-3 sm:px-5 ${scrolled ? 'is-scrolled' : ''}`}>
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="min-w-0">
              <span className="block truncate text-sm font-semibold tracking-[-0.03em] text-text-primary">
                me.spatialdom
              </span>
              <span className="mt-0.5 block truncate text-[0.72rem] font-medium uppercase tracking-[0.22em] text-text-muted">
                Dominic Fargas
              </span>
            </a>

            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-link">
                  {item.label}
                </a>
              ))}
              <a
                href={profile.spatialdom}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-3 py-2 text-[0.76rem] uppercase tracking-[0.18em] text-text-secondary transition hover:border-border-strong hover:text-text-primary"
              >
                Spatialdom
              </a>
            </nav>

            <button
              type="button"
              className="theme-icon-button inline-flex h-11 w-11 items-center justify-center rounded-full md:hidden"
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={mobileOpen}
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

          <AnimatePresence initial={false}>
            {mobileOpen ? (
              <motion.nav
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="theme-mobile-nav overflow-hidden pt-4 md:hidden"
              >
                <div className="grid gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="theme-mobile-link px-4 py-3"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href={profile.spatialdom}
                    target="_blank"
                    rel="noreferrer"
                    className="theme-mobile-link px-4 py-3"
                  >
                    Visit Spatialdom
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
