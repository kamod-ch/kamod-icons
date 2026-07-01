import type { IconProps } from "../../../shared/types";

export function BatteryVerticalChargingIcon({
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
      <path d="M7 18V7a2 2 0 0 1 2-2h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h.5a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2"/><path d="M12.667 8 10 12h4l-2.667 4"/>
    </svg>
  );
}
