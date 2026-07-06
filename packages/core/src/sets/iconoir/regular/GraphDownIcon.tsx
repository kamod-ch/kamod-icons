import type { IconProps } from "../../../shared/types";

export function GraphDownIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 20H4V4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 8 3-3 4.5 4.5"/>
    </svg>
  );
}
