import type { IconProps } from "../../../shared/types";

export function Badge5kIcon({
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
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm11 2v6"/><path d="m17 9-2 3 2 3m-2-3h-1m-7 3h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H7V9h3"/>
    </svg>
  );
}
