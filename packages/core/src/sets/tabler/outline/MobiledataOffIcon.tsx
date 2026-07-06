import type { IconProps } from "../../../shared/types";

export function MobiledataOffIcon({
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
      <path d="M16 12V4M8 20v-8m5-5 3-3 3 3M5 17l3 3 3-3M3 3l18 18"/>
    </svg>
  );
}
