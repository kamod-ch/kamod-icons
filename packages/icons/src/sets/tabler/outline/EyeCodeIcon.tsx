import type { IconProps } from "../../../shared/types";

export function EyeCodeIcon({
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
      <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/><path d="M11.11 17.958Q6.298 17.498 3 12q3.6-6 9-6t9 6q-.316.528-.647 1.008M20 21l2-2-2-2m-3 0-2 2 2 2"/>
    </svg>
  );
}
