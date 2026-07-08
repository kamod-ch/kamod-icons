import type { IconProps } from "../../../shared/types";

export function CaretLeftIcon({
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
      <path fill="currentColor" d="M7.058 10.615a2 2 0 0 0 0 2.772l5.344 5.558c1.123 1.168 3.097.373 3.097-1.247V6.304c0-1.621-1.974-2.416-3.097-1.248z"/>
    </svg>
  );
}
