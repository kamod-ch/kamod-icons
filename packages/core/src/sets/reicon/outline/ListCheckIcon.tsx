import type { IconProps } from "../../../shared/types";

export function ListCheckIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6Zm0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm18.211 2.909a.75.75 0 0 1 .13 1.052l-3.9 5a.75.75 0 0 1-1.165.021l-2.1-2.5a.75.75 0 1 1 1.148-.964l1.504 1.79 3.33-4.27a.75.75 0 0 1 1.053-.13ZM2.25 14a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/>
    </svg>
  );
}
