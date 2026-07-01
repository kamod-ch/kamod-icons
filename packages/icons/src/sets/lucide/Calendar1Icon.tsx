import type { IconProps } from "../../shared/types";

export function Calendar1Icon({
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
      <path d="M11 14h1v4m4-16v4M3 10h18M8 2v4"/><rect x="3" y="4" rx="2"/>
    </svg>
  );
}
