import type { IconProps } from "../../../shared/types";

export function BadgeHdIcon({
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
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M14 9v6h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm-7 6V9m3 6V9m-3 3h3"/>
    </svg>
  );
}
