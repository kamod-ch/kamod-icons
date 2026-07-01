import type { IconProps } from "../../../shared/types";

export function InclinationIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 19H3.41a.6.6 0 0 1-.431-1.016L16.444 4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 16c-.5-3.5-1-5-3-8"/>
    </svg>
  );
}
