import type { IconProps } from "../../../shared/types";

export function Sphere2Icon({
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
      <path d="M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3"/><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"/><path d="M12 3c-1.657 0-3 4.03-3 9s1.343 9 3 9"/>
    </svg>
  );
}
