import type { IconProps } from "../../shared/types";

export function EyeOffIcon({
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
      <path d="M2 12a12.5 12.5 0 0 1 20 0m0 0a12.5 12.5 0 0 1-20 0"/><path d="M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-6 8L20 4"/>
    </svg>
  );
}
