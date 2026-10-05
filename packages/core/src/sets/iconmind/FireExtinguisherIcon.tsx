import type { IconProps } from "../../shared/types";

export function FireExtinguisherIcon({
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
      <path d="M8 10a4 4 0 0 1 8 0v9a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z"/><path d="M10 6V3.5h5M16 8c3 0 4 2 4 5M8 13h8"/>
    </svg>
  );
}
