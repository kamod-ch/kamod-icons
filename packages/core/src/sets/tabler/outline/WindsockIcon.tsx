import type { IconProps } from "../../../shared/types";

export function WindsockIcon({
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
      <path d="M6 3v18m0-10 12-1V6L6 5m4 .5v5M14 6v4M4 21h4"/>
    </svg>
  );
}
