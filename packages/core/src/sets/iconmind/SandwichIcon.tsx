import type { IconProps } from "../../shared/types";

export function SandwichIcon({
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
      <path d="M4 4h16v4H4Zm0 8c3-2 5 1 8 0s5 1 8 0M4 16h16v4H4Z"/>
    </svg>
  );
}
