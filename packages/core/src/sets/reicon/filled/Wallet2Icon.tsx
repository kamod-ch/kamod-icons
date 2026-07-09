import type { IconProps } from "../../../shared/types";

export function Wallet2Icon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" strokeWidth="1.333"><path fillRule="evenodd" d="M15.86 3.486a.335.335 0 0 1 .355.18zm0 0L7.111 4.979A3.74 3.74 0 0 0 4 8.667a1 1 0 0 1-2 0 5.74 5.74 0 0 1 4.774-5.66l8.75-1.493a2.335 2.335 0 0 1 2.48 1.257 1 1 0 1 1-1.79.895" clipRule="evenodd"/><path d="M22 15.333h-3.333a2 2 0 0 1 0-4H22c.736 0 1.333.598 1.333 1.334V14c0 .736-.597 1.333-1.333 1.333Z"/><path d="M22 17.333h-3.333a4 4 0 0 1 0-8H22V9a3.67 3.67 0 0 0-3.667-3.667H5.667A3.67 3.67 0 0 0 2 9v8.667a3.67 3.67 0 0 0 3.667 3.666h12.666A3.67 3.67 0 0 0 22 17.667z"/></g>
    </svg>
  );
}
