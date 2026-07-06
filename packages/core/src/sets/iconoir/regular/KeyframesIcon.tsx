import type { IconProps } from "../../../shared/types";

export function KeyframesIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.848 13.317 9.505 18.28a2 2 0 0 1-3.01 0l-4.343-4.963a2 2 0 0 1 0-2.634L6.495 5.72a2 2 0 0 1 3.01 0l4.343 4.963a2 2 0 0 1 0 2.634"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13 19 4.884-5.698a2 2 0 0 0 0-2.604L13 5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m17 19 4.884-5.698a2 2 0 0 0 0-2.604L17 5"/>
    </svg>
  );
}
