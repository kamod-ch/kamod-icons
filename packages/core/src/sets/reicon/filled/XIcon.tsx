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
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M18.293 19.707a1 1 0 0 0 1.414-1.414L13.414 12l6.293-6.293a1 1 0 0 0-1.414-1.414L12 10.586 5.707 4.293a1 1 0 0 0-1.414 1.414L10.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414L12 13.414z"/>
    </svg>
  );
}
