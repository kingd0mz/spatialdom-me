import type { PropsWithChildren } from 'react';
import { Container } from './Container';

type SectionProps = PropsWithChildren<{
  id: string;
  className?: string;
  divider?: boolean;
}>;

export function Section({ id, className = '', divider = true, children }: SectionProps) {
  return (
    <section
      id={id}
      className={`section-shell scroll-mt-24 sm:scroll-mt-28 ${divider ? 'section-divider' : ''} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
