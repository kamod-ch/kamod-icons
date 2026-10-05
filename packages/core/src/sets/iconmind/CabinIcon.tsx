import type { IconProps } from "../../shared/types";

export function CabinIcon({
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
      <path d="m3 11 9-9 9 9M6 11v10h12V11M6 16h12"/><path d="M16 6V3h3v3"/>
    </svg>
  );
}
