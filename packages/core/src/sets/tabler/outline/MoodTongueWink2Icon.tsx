import type { IconProps } from "../../../shared/types";

export function MoodTongueWink2Icon({
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18m3-11h-.01"/><path d="M10 14v2a2 2 0 1 0 4 0v-2m1.5 0h-7M7 10c.5-1 2.5-1 3 0"/>
    </svg>
  );
}
