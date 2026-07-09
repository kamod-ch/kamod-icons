import type { IconProps } from "../../../shared/types";

export function AlarmClockOffIcon({
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
      <path fill="currentColor" d="M2.53 1.47a.75.75 0 0 0-1.06 1.06l.346.347A3.54 3.54 0 0 0 1.25 4.8c0 .543.123 1.06.342 1.522a.75.75 0 0 0 1.355-.644A2.04 2.04 0 0 1 2.75 4.8c0-.291.06-.568.17-.82l1.911 1.912a9.72 9.72 0 0 0-2.58 6.608c0 2.55.978 4.87 2.58 6.608L2.47 21.47a.75.75 0 1 0 1.06 1.06l2.4-2.4A9.7 9.7 0 0 0 12 22.25c2.55 0 4.872-.98 6.608-2.581l2.862 2.861a.75.75 0 1 0 1.06-1.06l-3.386-3.386-.004-.005L6.42 5.36l-.004-.005-3.062-3.061-.005-.005-.004-.005zM19.2 2.75c-.316 0-.613.07-.878.197a.75.75 0 0 1-.644-1.355 3.55 3.55 0 0 1 4.73 4.73.75.75 0 0 1-1.355-.644A2.05 2.05 0 0 0 19.2 2.75Z"/><path fill="currentColor" d="M7.986 3.612A9.7 9.7 0 0 1 12 2.75a9.75 9.75 0 0 1 9.75 9.75c0 1.43-.308 2.789-.862 4.014a.75.75 0 0 1-1.214.221L7.765 4.825a.75.75 0 0 1 .221-1.213Z"/>
    </svg>
  );
}
