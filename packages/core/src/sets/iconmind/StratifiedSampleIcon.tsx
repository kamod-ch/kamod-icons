import type { IconProps } from "../../shared/types";

export function StratifiedSampleIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 4h18M6 7.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 11h18m-10 3.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 18h18m-5 3a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
