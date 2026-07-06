import type { IconProps } from "../../shared/types";

export function ComputerIcon({
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
      <rect x="5" y="2" rx="2"/><rect x="2" y="14" rx="2"/><path d="M6 18h2m4 0h6"/>
    </svg>
  );
}
