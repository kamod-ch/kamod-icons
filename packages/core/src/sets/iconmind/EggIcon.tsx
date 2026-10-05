import type { IconProps } from "../../shared/types";

export function EggIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M12 21c-4 0-6-3-6-7C6 9 9 4 12 4s6 5 6 10c0 4-2 7-6 7"/><path d="m8 13 2 2 2-2 2 2 2-2"/>
    </svg>
  );
}
