import type { IconProps } from "../../../shared/types";

export function BuildingBroadcastTowerIcon({
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
      <path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/><path d="M16.616 13.924a5 5 0 1 0-9.23 0"/><path d="M20.307 15.469a9 9 0 1 0-16.615 0"/><path d="m9 21 3-9 3 9m-5-2h4"/>
    </svg>
  );
}
