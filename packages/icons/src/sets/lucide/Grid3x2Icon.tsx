import type { IconProps } from "../../shared/types";

export function Grid3x2Icon({
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
      <path d="M15 3v18M3 12h18M9 3v18"/><rect x="3" y="3" rx="2"/>
    </svg>
  );
}
