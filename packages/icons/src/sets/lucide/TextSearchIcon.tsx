import type { IconProps } from "../../shared/types";

export function TextSearchIcon({
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
      <path d="M21 5H3m7 7H3m7 7H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/>
    </svg>
  );
}
