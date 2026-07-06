import type { IconProps } from "../../../shared/types";

export function TextWrapColumnIcon({
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
      <path d="M7 9h7a3 3 0 0 1 0 6h-4l2-2m0 4-2-2M3 3v18M21 3v18"/>
    </svg>
  );
}
