import type { IconProps } from "../../shared/types";

export function FileCogIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 2v6h6M6 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-7v1m0 6v1m4-4H9m-6 0H2m7-3-.88.88m-4.24 4.24L3 17m6 0-.88-.88m-4.24-4.24L3 11"/>
    </svg>
  );
}
