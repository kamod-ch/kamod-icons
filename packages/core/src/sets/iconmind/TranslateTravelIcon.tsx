import type { IconProps } from "../../shared/types";

export function TranslateTravelIcon({
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
      <path d="M2 5h8v8H2Zm3 8v3l3-3m6-4h8v8h-8Zm3 8v3l3-3"/>
    </svg>
  );
}
