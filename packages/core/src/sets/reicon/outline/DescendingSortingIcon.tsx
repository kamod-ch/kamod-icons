import type { IconProps } from "../../../shared/types";

export function DescendingSortingIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.667 17 17 20.333 20.333 17M17 20.333v-12M3.667 13h8.666M3.667 8.333h8.666M3.667 3.667H17"/>
    </svg>
  );
}
