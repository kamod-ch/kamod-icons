import type { IconProps } from "../../shared/types";

export function PriceRuleIcon({
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
      <path d="m4 12 8-8h8v8l-8 8Z"/><path d="M16 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0M9 9l3 3 3-3m-3 3v3"/>
    </svg>
  );
}
