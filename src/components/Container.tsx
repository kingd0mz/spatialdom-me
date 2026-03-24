import type { ElementType, PropsWithChildren } from 'react';

type ContainerProps<T extends ElementType> = PropsWithChildren<{
  as?: T;
  className?: string;
}>;

export function Container<T extends ElementType = 'div'>({
  as,
  className = '',
  children,
}: ContainerProps<T>) {
  const Component = as ?? 'div';

  return <Component className={`container-shell relative z-10 ${className}`}>{children}</Component>;
}
