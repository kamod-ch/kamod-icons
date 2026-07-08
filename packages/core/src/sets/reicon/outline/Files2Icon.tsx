import type { IconProps } from "../../../shared/types";

export function Files2Icon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8.333 14.333h-4A1.334 1.334 0 0 1 3 13V3.667c0-.736.597-1.334 1.333-1.334h5.334L12.333 5v1.333"/><path d="M9 2.333V5h2.667M21 12.333v8c0 .736-.597 1.334-1.333 1.334H13a1.334 1.334 0 0 1-1.333-1.334V11c0-.736.597-1.333 1.333-1.333h5.333z"/><path d="M18.333 9.667v2.666H21"/></g>
    </svg>
  );
}
