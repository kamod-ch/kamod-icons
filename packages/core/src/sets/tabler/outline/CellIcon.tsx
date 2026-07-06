import type { IconProps } from "../../../shared/types";

export function CellIcon({
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
      <path d="M8 4 4 6v5l4 2 4-2V6zm4 7 4 2 4-2V6l-4-2-4 2m-4 7v5l4 2 4-2v-5"/>
    </svg>
  );
}
