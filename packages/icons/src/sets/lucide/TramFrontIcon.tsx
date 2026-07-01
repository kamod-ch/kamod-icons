import type { IconProps } from "../../shared/types";

export function TramFrontIcon({
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
      <rect x="4" y="3" rx="2"/><path d="M4 11h16m-8-8v8m-4 8-2 3m12 0-2-3m-8-4h.01M16 15h.01"/>
    </svg>
  );
}
