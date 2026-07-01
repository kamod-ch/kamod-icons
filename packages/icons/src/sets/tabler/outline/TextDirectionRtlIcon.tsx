import type { IconProps } from "../../../shared/types";

export function TextDirectionRtlIcon({
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
      <path d="M16 4H9.5a3.5 3.5 0 0 0 0 7h.5m4 4V4m-4 11V4M5 19h14M7 21l-2-2 2-2"/>
    </svg>
  );
}
