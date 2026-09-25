import { Container } from './Container';
import { profile } from '../data/site';

export function Footer() {
  return (
    <footer className="section-divider py-8">
      <Container className="flex flex-col gap-3 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{profile.name} · me.spatialdom.xyz</p>
        <a href={profile.spatialdom} target="_blank" rel="noreferrer" aria-label="Part of the Spatialdom ecosystem. Visit Spatialdom (opens in a new tab)" className="text-link inline-flex min-h-11 items-center">
          Part of the Spatialdom ecosystem. ↗
        </a>
      </Container>
    </footer>
  );
}
