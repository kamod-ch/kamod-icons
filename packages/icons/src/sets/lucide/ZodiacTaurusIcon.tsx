import type { IconProps } from "../../shared/types";

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
      <circle cx="12" cy="15" r="6"/><path d="M18 3A6 6 0 0 1 6 3"/>
    </svg>
  );
}
