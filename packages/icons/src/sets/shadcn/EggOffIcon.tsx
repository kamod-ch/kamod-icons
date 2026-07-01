import type { IconProps } from "../../shared/types";

export function EggOffIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.399 6.399c-1.037 1.758-1.75 3.79-1.9 5.601-.37 4.43 1.27 9.95 7.5 10 3.257-.026 5.26-1.547 6.376-3.625m1.157-4.5q.046-.938-.032-1.875c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297M2 2l20 20"/>
    </svg>
  );
}
