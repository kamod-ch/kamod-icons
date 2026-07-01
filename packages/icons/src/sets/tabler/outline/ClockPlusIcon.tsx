import type { IconProps } from "../../../shared/types";

export function ClockPlusIcon({
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
      <path d="M20.984 12.535a9 9 0 1 0-8.468 8.45M16 19h6m-3-3v6"/><path d="M12 7v5l3 3"/>
    </svg>
  );
}
