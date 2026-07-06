import type { IconProps } from "../../shared/types";

export function TimerOffIcon({
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
      <path d="M10 2h4m-9.4 9a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7m-7.6-14a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2M2 2l20 20M12 12v-2"/>
    </svg>
  );
}
