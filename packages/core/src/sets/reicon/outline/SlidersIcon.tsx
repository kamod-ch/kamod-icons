import type { IconProps } from "../../../shared/types";

export function SlidersIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M1.25 6.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM5 4.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd"/><path fill="currentColor" d="M13 7.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 0 1.5zm-2 11a.75.75 0 0 0 0-1.5H2a.75.75 0 0 0 0 1.5z"/><path fill="currentColor" fillRule="evenodd" d="M19 13.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm-2.25 3.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z" clipRule="evenodd"/>
    </svg>
  );
}
