import type { IconProps } from "../../../shared/types";

export function CaretRightIcon({
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
      <path fill="currentColor" d="M16.94 10.614a2 2 0 0 1 0 2.772l-5.343 5.559c-1.123 1.168-3.097.373-3.097-1.248V6.303c0-1.62 1.974-2.416 3.097-1.247z"/>
    </svg>
  );
}
