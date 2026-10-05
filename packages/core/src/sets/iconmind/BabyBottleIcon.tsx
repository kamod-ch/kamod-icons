import type { IconProps } from "../../shared/types";

export function BabyBottleIcon({
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
      <path d="M7 21V9h10v12Zm0-8h10m-7-4V6.5a2 2 0 0 1 4 0V9"/>
    </svg>
  );
}
