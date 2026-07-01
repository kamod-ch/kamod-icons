import type { IconProps } from "../../../shared/types";

export function Signal5gIcon({
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
      <path d="M18 8h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4h-1M6 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H6V8h4"/>
    </svg>
  );
}
