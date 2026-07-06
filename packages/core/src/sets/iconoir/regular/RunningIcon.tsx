import type { IconProps } from "../../../shared/types";

export function RunningIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-2.387 1.267-3.308 4.135 4.135 4.135-2.067 4.55"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m6.41 9.508 3.387-3.309 2.816 2.068 2.895 3.308h3.722M8.892 15.71l-1.241.827H4.343"/>
    </svg>
  );
}
