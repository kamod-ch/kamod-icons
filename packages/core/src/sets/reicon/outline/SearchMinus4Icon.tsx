import type { IconProps } from "../../../shared/types";

export function SearchMinus4Icon({
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
      <path fill="currentColor" d="M13.5 11.25a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5z"/><path fill="currentColor" fillRule="evenodd" d="M10.5 19.75a9.2 9.2 0 0 0 5.989-2.2l4.98 4.98a.75.75 0 1 0 1.061-1.06l-4.98-4.981a9.2 9.2 0 0 0 2.2-5.989 9.25 9.25 0 1 0-9.25 9.25Zm0-17a7.75 7.75 0 1 0 5.379 13.33.7.7 0 0 1 .2-.201A7.75 7.75 0 0 0 10.5 2.75Z" clipRule="evenodd"/>
    </svg>
  );
}
