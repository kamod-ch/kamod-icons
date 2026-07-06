import type { IconProps } from "../../../shared/types";

export function SingleTapGestureIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 20.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 7.29C5.496 5.039 8.517 3.5 12 3.5s6.504 1.539 8 3.79"/>
    </svg>
  );
}
