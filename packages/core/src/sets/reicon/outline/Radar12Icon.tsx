import type { IconProps } from "../../../shared/types";

export function Radar12Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m8 4c1.26-1.67 2-3.75 2-6s-.74-4.33-2-6M4 6c-1.26 1.67-2 3.75-2 6s.74 4.33 2 6m12.8-2.4c.75-1 1.2-2.25 1.2-3.6s-.45-2.6-1.2-3.6m-9.6 0C6.45 9.4 6 10.65 6 12s.45 2.6 1.2 3.6"/>
    </svg>
  );
}
