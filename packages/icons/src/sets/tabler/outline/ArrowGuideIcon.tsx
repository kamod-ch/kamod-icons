import type { IconProps } from "../../../shared/types";

export function ArrowGuideIcon({
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
      <path d="M3 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m4 0h3a2 2 0 0 0 2-2V9a2 2 0 0 1 2-2h7"/><path d="m18 4 3 3-3 3"/>
    </svg>
  );
}
