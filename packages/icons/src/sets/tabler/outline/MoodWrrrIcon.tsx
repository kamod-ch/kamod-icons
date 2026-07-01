import type { IconProps } from "../../../shared/types";

export function MoodWrrrIcon({
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
      <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18"/><path d="m8 16 1-1 1.5 1 1.5-1 1.5 1 1.5-1 1 1m-7.5-4.5L10 10 8.5 8.5m7 3L14 10l1.5-1.5"/>
    </svg>
  );
}
