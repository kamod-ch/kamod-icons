import type { IconProps } from "../../../shared/types";

export function BedFlatIcon({
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
      <path d="M3 11a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7 2h11v-2a3 3 0 0 0-3-3h-8zm-7 3h18"/>
    </svg>
  );
}
