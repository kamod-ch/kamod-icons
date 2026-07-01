import type { IconProps } from "../../shared/types";

export function MicrowaveIcon({
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
      <rect x="2" y="4" rx="2"/><rect x="6" y="8" rx="1"/><path d="M18 8v7M6 19v2m12-2v2"/>
    </svg>
  );
}
