import type { IconProps } from "../../shared/types";

export function TentTreeIcon({
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
      <circle cx="4" cy="4" r="2"/><path d="m14 5 3-3 3 3m-6 5 3-3 3 3m-3 4V2m0 12H7l-5 8h20Zm-9 0v8m1-8 5 8"/>
    </svg>
  );
}
