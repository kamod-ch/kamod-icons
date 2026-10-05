import type { IconProps } from "../../shared/types";

export function HabitStreakIcon({
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
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm0 2h18M8 2v3m8-3v3"/><path d="M12 11c1 2.5 3 3.5 3 6a3 3 0 1 1-6 0c0-2 1.5-2.5 1.5-3.5.5.5 1.5.5 1.5-2.5"/>
    </svg>
  );
}
