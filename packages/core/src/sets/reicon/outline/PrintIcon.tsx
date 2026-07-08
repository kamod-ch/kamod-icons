import type { IconProps } from "../../../shared/types";

export function PrintIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7.667 7V3.667c0-.736.597-1.334 1.333-1.334h6c.736 0 1.333.598 1.333 1.334V7"/><path d="M7.667 17.667h-2A2.666 2.666 0 0 1 3 15V9.667A2.666 2.666 0 0 1 5.667 7h12.666A2.666 2.666 0 0 1 21 9.667V15a2.666 2.666 0 0 1-2.667 2.667h-2"/><path d="M16.333 13v7.333c0 .736-.597 1.334-1.333 1.334H9a1.334 1.334 0 0 1-1.333-1.334V13z"/></g>
    </svg>
  );
}
