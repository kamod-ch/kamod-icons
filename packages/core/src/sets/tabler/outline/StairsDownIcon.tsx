import type { IconProps } from "../../../shared/types";

export function StairsDownIcon({
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
      <path d="M22 21h-5v-5h-5v-5H7V6H2m16-3v7m-3-3 3 3 3-3"/>
    </svg>
  );
}
