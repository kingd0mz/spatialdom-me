import type { PropsWithChildren } from 'react';
import { BackgroundMotif } from './BackgroundMotif';

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="app-shell bg-background text-text-primary">
      <BackgroundMotif />
      {children}
    </div>
  );
}
