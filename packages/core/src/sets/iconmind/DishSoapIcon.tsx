import type { IconProps } from "../../shared/types";

export function DishSoapIcon({
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
      <path d="M6 21v-9c0-2 2-3 2-4V5h4v3c0 1 2 2 2 4v9ZM8 5V2h4v3m4 3a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
