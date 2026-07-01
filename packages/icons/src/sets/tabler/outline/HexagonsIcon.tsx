import type { IconProps } from "../../../shared/types";

export function HexagonsIcon({
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
      <path d="M4 18v-5l4-2 4 2v5l-4 2zm4-7V6l4-2 4 2v5m-4 2 4-2 4 2v5l-4 2-4-2"/>
    </svg>
  );
}
