import type { IconProps } from "../../../shared/types";

export function LollipopIcon({
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
      <path d="M7 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0"/><path d="M21 10a3.5 3.5 0 0 0-7 0m0 0a3.5 3.5 0 0 1-7 0m7 7a3.5 3.5 0 0 0 0-7m0-7a3.5 3.5 0 0 0 0 7M3 21l6-6"/>
    </svg>
  );
}
