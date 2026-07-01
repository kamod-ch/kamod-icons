import type { IconProps } from "../../shared/types";

export function ContactRoundIcon({
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
      <path d="M16 2v2m1.915 18a6 6 0 0 0-12 0M8 2v2"/><circle cx="12" cy="12" r="4"/><rect x="3" y="4" rx="2"/>
    </svg>
  );
}
