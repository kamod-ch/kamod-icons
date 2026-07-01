import type { IconProps } from "../../shared/types";

export function AlarmClockPlusIcon({
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
      <circle cx="12" cy="13" r="8"/><path d="M5 3 2 6m20 0-3-3M6.38 18.7 4 21m13.64-2.33L20 21m-8-11v6m-3-3h6"/>
    </svg>
  );
}
