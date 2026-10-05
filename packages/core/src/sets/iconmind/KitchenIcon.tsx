import type { IconProps } from "../../shared/types";

export function KitchenIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 3v6h7V3Zm11 0v6h7V3ZM2 13h20M4 13v8h16v-8M4 17h16"/>
    </svg>
  );
}
