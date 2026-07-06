import type { IconProps } from "../../../shared/types";

export function ZodiacTaurusIcon({
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
      <path d="M6 3a6 6 0 0 0 12 0"/><path d="M6 15a6 6 0 1 0 12 0 6 6 0 1 0-12 0"/>
    </svg>
  );
}
