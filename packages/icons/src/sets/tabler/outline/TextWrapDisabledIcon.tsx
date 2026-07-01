import type { IconProps } from "../../../shared/types";

export function TextWrapDisabledIcon({
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
      <path d="M4 6h10M4 18h10M4 12h17l-3-3m0 6 3-3"/>
    </svg>
  );
}
