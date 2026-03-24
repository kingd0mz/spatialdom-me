import type { PropsWithChildren } from 'react';
import { BackgroundMotif } from './BackgroundMotif';
import { CustomCursor } from './CustomCursor';

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="app-shell bg-background text-text-primary">
      <BackgroundMotif />
      <CustomCursor />
      {children}
    </div>
  );
}
