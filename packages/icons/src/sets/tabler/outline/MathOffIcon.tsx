import type { IconProps } from "../../../shared/types";

export function MathOffIcon({
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
      <path d="m14 19 2.5-2.5m2-2L20 13M3 3l18 18M19 5h-7l-.646 2.262m-.906 3.169L8 19l-3-6H3"/>
    </svg>
  );
}
