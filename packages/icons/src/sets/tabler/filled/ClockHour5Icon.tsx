import type { IconProps } from "../../../shared/types";

export function ClockHour5Icon({
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
      <path d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M11 7v5.022l.003.054.02.135.005.025a1 1 0 0 0 .056.165l.04.082.04.065 2.004 3.007a1 1 0 1 0 1.664-1.11L13 11.697V7a1 1 0 0 0-.883-.993L12 6a1 1 0 0 0-1 1"/>
    </svg>
  );
}
