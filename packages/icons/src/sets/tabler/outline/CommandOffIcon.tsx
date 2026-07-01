import type { IconProps } from "../../../shared/types";

export function CommandOffIcon({
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
      <path d="M9 9v8a2 2 0 1 1-2-2h8m3.411 3.417A2 2 0 0 1 15 17v-2m0-4V7a2 2 0 1 1 2 2h-4M9 9H7a2 2 0 0 1-1.417-3.411M3 3l18 18"/>
    </svg>
  );
}
