import type { IconProps } from "../../shared/types";

export function CascadeIcon({
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
      <path d="M5 2.5 7.5 5 5 7.5 2.5 5Zm7 7 2.5 2.5-2.5 2.5L9.5 12Zm7 7 2.5 2.5-2.5 2.5-2.5-2.5Z"/>
    </svg>
  );
}
