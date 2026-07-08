import type { IconProps } from "../../../shared/types";

export function MoreHIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M2.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM5 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM9.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM12 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm7-1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM17.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z" clipRule="evenodd"/>
    </svg>
  );
}
