import type { IconProps } from "../../../shared/types";

export function OfficeIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.333 7.667h6c.736 0 1.334.597 1.334 1.333v10.667c0 .736-.598 1.333-1.334 1.333H13V9c0-.736.597-1.333 1.333-1.333m-10.666 4h4C8.403 11.667 9 12.264 9 13v8H3.667a1.334 1.334 0 0 1-1.334-1.333V13c0-.736.598-1.333 1.334-1.333m2.666-3.334V5.931c0-.56.35-1.059.875-1.252l7.333-2.688a1.333 1.333 0 0 1 1.792 1.252v1.09M9 21h4m3.333-9.333h2m-2 3.333h2"/>
    </svg>
  );
}
