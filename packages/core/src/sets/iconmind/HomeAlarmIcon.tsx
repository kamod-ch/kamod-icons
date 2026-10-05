import type { IconProps } from "../../shared/types";

export function HomeAlarmIcon({
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
      <path d="M6 17c2-2 2-5 2-7 0-3 2-5 4-5s4 2 4 5c0 2 0 5 2 7Zm5 2a1 1 0 1 0 2 0 1 1 0 1 0-2 0m8-11c2 2 2 6 0 8"/>
    </svg>
  );
}
