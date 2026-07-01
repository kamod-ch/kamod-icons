import type { IconProps } from "../../../shared/types";

export function BadgeArIcon({
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
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0V15m-3-2h3m4-1h1.5a1.5 1.5 0 0 0 0-3H14v6m3 0-2-3"/>
    </svg>
  );
}
