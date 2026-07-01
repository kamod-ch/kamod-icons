import type { IconProps } from "../../../shared/types";

export function RouterIcon({
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
      <path d="M3 15a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm14 2v.01M13 17v.01M15 13v-2m-3.25-2.25a4 4 0 0 1 6.5 0M8.5 6.5a8 8 0 0 1 13 0"/>
    </svg>
  );
}
