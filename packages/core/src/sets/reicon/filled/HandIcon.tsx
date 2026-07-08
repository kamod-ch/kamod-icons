import type { IconProps } from "../../../shared/types";

export function HandIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M20 2.667c-.736 0-1.333.597-1.333 1.333v6.667a.667.667 0 0 1-1.334 0V3a1.334 1.334 0 0 0-2.666 0v7.667a.667.667 0 0 1-1.334 0V2a1.334 1.334 0 0 0-2.666 0v8.667a.667.667 0 0 1-1.334 0V3a1.334 1.334 0 0 0-2.666 0v12.23l-.019-.026-2.357-3.003a1.67 1.67 0 0 0-2.34-.281c-.72.565-.806 1.508-.282 2.34l3.402 5.232c.984 1.513 2.945 3.176 6.929 3.176h4a5.334 5.334 0 0 0 5.333-5.333V4c0-.736-.597-1.333-1.333-1.333Z"/>
    </svg>
  );
}
