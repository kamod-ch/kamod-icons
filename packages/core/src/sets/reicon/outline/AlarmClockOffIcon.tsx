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
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" fillRule="evenodd" d="M2.53 1.47a.75.75 0 0 0-1.06 1.06l.346.347A3.54 3.54 0 0 0 1.25 4.8c0 .543.123 1.06.342 1.522a.75.75 0 0 0 1.355-.644A2.04 2.04 0 0 1 2.75 4.8c0-.291.06-.568.17-.82l1.911 1.912a9.72 9.72 0 0 0-2.58 6.608c0 2.55.978 4.87 2.58 6.608L2.47 21.47a.75.75 0 1 0 1.06 1.06l2.4-2.4A9.7 9.7 0 0 0 12 22.25c2.55 0 4.872-.98 6.608-2.581l2.862 2.861a.75.75 0 1 0 1.06-1.06l-3.385-3.385-.01-.011L6.425 5.366l-.01-.011-3.06-3.06-.006-.005-.004-.005zm3.363 5.483a8.25 8.25 0 0 0 11.654 11.654z" clipRule="evenodd"/><path fill="currentColor" d="M18.322 2.947a2.05 2.05 0 0 1 2.731 2.731.75.75 0 1 0 1.355.644 3.55 3.55 0 0 0-4.73-4.73.75.75 0 0 0 .644 1.355Z"/><path fill="currentColor" d="M8.604 4.979a8.25 8.25 0 0 1 10.917 10.917.75.75 0 1 0 1.367.618 9.7 9.7 0 0 0 .862-4.014A9.75 9.75 0 0 0 12 2.75c-1.43 0-2.789.308-4.014.862a.75.75 0 1 0 .618 1.367Z"/>
    </svg>
  );
}
