import type { IconProps } from "../../shared/types";

export function TentIcon({
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
      <path d="M3.5 21 14 3m6.5 18L10 3m5.5 18L12 15l-3.5 6M2 21h20"/>
    </svg>
  );
}
