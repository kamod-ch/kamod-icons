import type { IconProps } from "../../../shared/types";

export function BlendModeIcon({
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
      <path d="M8 9.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 1 0-13 0"/><path d="M3 14.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 1 0-13 0"/>
    </svg>
  );
}
