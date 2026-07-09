import type { IconProps } from "../../../shared/types";

export function ChevronExpandYIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M12.707 2.96a1 1 0 0 0-1.415 0L6.625 7.627A1 1 0 1 0 8.04 9.04L12 5.081l3.96 3.96a1 1 0 0 0 1.413 0 1 1 0 0 0 0-1.414zm3.253 12L12 18.92l-3.96-3.96a1 1 0 1 0-1.415 1.415l4.667 4.666a1 1 0 0 0 1.413 0l4.667-4.666a1 1 0 1 0-1.415-1.415Z"/>
    </svg>
  );
}
