import type { IconProps } from "../../shared/types";

export function SportsDayIcon({
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
      <path d="M8 21V8h8v13Zm-6 0v-8h6m8 0h6v8M10 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
