import type { IconProps } from "../../../shared/types";

export function ZzzOffIcon({
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
      <path d="M4 12h6l-6 8h6m4-16h6l-5.146 6.862M16 12h4M3 3l18 18"/>
    </svg>
  );
}
