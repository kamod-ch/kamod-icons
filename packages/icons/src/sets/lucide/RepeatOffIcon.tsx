import type { IconProps } from "../../shared/types";

export function RepeatOffIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M11.656 6H21l-4-4m.898 15.898A4 4 0 0 1 17 18H3l4-4M2 2l20 20m-1-9v1a4 4 0 0 1-.171 1.159M21 6l-4 4M3 11v-1a4 4 0 0 1 3.102-3.898M7 22l-4-4"/>
    </svg>
  );
}
