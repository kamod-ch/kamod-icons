import type { IconProps } from "../../../shared/types";

export function CircleLetterUIcon({
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m2 5a1 1 0 0 0-1 1v6a1 1 0 0 1-2 0V8a1 1 0 0 0-2 0v6a3 3 0 0 0 6 0V8a1 1 0 0 0-1-1"/>
    </svg>
  );
}
