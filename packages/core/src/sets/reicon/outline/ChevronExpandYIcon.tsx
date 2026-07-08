import type { IconProps } from "../../../shared/types";

export function ChevronExpandYIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.667 8.333 12 3.667 7.333 8.333m9.334 7.334L12 20.333l-4.667-4.666"/>
    </svg>
  );
}
