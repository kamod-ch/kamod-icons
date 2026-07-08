import type { IconProps } from "../../../shared/types";

export function ListIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M17 3.25a.75.75 0 0 1 .6.3l3 4a.75.75 0 1 1-1.2.9l-1.65-2.2v11.5l1.65-2.2a.75.75 0 1 1 1.2.9l-3 4a.75.75 0 0 1-1.2 0l-3-4a.75.75 0 1 1 1.2-.9l1.65 2.2V6.25l-1.65 2.2a.75.75 0 1 1-1.2-.9l3-4a.75.75 0 0 1 .6-.3ZM3.25 7A.75.75 0 0 1 4 6.25h7a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 7Zm0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/>
    </svg>
  );
}
