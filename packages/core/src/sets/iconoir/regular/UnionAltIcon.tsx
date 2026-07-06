import type { IconProps } from "../../../shared/types";

export function UnionAltIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 22A7 7 0 1 0 9 8a7 7 0 0 0 0 14"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14"/>
    </svg>
  );
}
