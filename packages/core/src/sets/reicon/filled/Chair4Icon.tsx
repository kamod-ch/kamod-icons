import type { IconProps } from "../../../shared/types";

export function Chair4Icon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M16.807 21.453 13 19.403V15a1 1 0 0 0-2 0v4.403l-3.807 2.05a1 1 0 0 0 .947 1.762l2.86-1.54V23a1 1 0 0 0 2 0v-1.326l2.86 1.54a1 1 0 0 0 1.353-.407 1 1 0 0 0-.406-1.355ZM3.279 11.017c.973-1.268 2.813-2.35 6.054-2.35h5.334c3.25 0 5.092 1.089 6.062 2.362l.486-1.348a3.5 3.5 0 0 0 .078-2.102C19.585 1.464 18.92.02 12 .02S4.415 1.464 2.707 7.579a3.5 3.5 0 0 0 .082 2.116z"/><path d="M14.667 10.667H9.333c-3.946 0-5 1.886-5 3A2.336 2.336 0 0 0 6.667 16h10.666a2.336 2.336 0 0 0 2.334-2.333c0-1.114-1.054-3-5-3Z"/></g>
    </svg>
  );
}
