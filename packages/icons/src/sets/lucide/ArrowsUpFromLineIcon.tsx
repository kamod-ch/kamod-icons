import type { IconProps } from "../../shared/types";

export function ArrowsUpFromLineIcon({
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
      <path d="m4 6 3-3 3 3M7 17V3m7 3 3-3 3 3m-3 11V3M4 21h16"/>
    </svg>
  );
}
