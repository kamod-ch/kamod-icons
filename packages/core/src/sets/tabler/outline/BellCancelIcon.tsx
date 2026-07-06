import type { IconProps } from "../../../shared/types";

export function BellCancelIcon({
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
      <path d="M12.5 17H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6 2 2 0 1 1 4 0 7 7 0 0 1 4 6v1m-9 5v1a3 3 0 0 0 3 3m4-2a3 3 0 1 0 6 0 3 3 0 1 0-6 0m1 2 4-4"/>
    </svg>
  );
}
