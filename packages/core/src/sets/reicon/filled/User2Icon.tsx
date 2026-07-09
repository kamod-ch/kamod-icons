import type { IconProps } from "../../../shared/types";

export function User2Icon({
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
      <circle cx="12" cy="6" r="4" fill="currentColor"/><ellipse cx="12" cy="17" fill="currentColor" rx="7" ry="4"/>
    </svg>
  );
}
