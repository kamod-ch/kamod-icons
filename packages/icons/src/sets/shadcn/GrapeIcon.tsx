import type { IconProps } from "../../shared/types";

export function GrapeIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 5V2l-5.89 5.89m.49 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6M8.11 10.4a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.35 14.65a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.91 8.85a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.15 13.09a3 3 0 1 0 0-6 3 3 0 0 0 0 6M6.56 16.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.8 20.44a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
    </svg>
  );
}
