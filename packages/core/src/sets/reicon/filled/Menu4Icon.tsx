import type { IconProps } from "../../../shared/types";

export function Menu4Icon({
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
      <path fill="currentColor" d="M17.54 8.81a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92Zm-11.08 0a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92Zm11.08 12.301a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92Zm-11.08 0a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92Z"/>
    </svg>
  );
}
