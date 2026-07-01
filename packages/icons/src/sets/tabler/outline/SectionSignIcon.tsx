import type { IconProps } from "../../../shared/types";

export function SectionSignIcon({
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
      <path d="M9.172 19A3 3 0 1 0 12 15m2.83-10A3 3 0 1 0 12 9"/><path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/>
    </svg>
  );
}
