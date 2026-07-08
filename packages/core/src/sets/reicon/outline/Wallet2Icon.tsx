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
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 8.667a4.74 4.74 0 0 1 3.943-4.674L15.692 2.5a1.335 1.335 0 0 1 1.417.719"/><path d="M21 15.667v2a2.666 2.666 0 0 1-2.667 2.666H5.667A2.666 2.666 0 0 1 3 17.667V9a2.666 2.666 0 0 1 2.667-2.667h12.666A2.666 2.666 0 0 1 21 9v2"/><path d="M21 15.667h-3.667a2.334 2.334 0 0 1 0-4.667H21c.736 0 1.333.597 1.333 1.333v2c0 .736-.597 1.334-1.333 1.334"/></g>
    </svg>
  );
}
