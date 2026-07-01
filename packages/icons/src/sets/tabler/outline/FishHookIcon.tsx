import type { IconProps } from "../../../shared/types";

export function FishHookIcon({
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
      <path d="M16 9v6a5 5 0 0 1-10 0v-4l3 3"/><path d="M14 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2-2V3"/>
    </svg>
  );
}
