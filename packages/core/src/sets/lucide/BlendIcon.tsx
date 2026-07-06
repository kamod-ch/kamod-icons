import type { IconProps } from "../../shared/types";

export function BlendIcon({
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
      <circle cx="9" cy="9" r="7"/><circle cx="15" cy="15" r="7"/>
    </svg>
  );
}
