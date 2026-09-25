import type { PropsWithChildren } from 'react';

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="app-shell bg-background text-text-primary">
      {children}
    </div>
  );
}
