import type { IconProps } from "../../shared/types";

export function FamilyHouseIcon({
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
      <path d="M3 20v-8l9-9 9 9v8Z"/><path d="M16 8V4h3v7M9 20v-6h6v6"/>
    </svg>
  );
}
