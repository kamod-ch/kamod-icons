import type { IconProps } from "../../../shared/types";

export function XIcon({
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
      <path fill="currentColor" d="M18.47 19.53a.75.75 0 1 0 1.06-1.06L13.06 12l6.47-6.47a.75.75 0 0 0-1.06-1.06L12 10.94 5.53 4.47a.75.75 0 0 0-1.06 1.06L10.94 12l-6.47 6.47a.75.75 0 1 0 1.06 1.06L12 13.06z"/>
    </svg>
  );
}
