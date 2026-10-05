import type { IconProps } from "../../shared/types";

export function HouseRulesIcon({
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
      <path d="M5 3v18h14V3Z"/><path d="M9 9V6l3-3 3 3v3Zm-1 5h8m-8 4h8"/>
    </svg>
  );
}
