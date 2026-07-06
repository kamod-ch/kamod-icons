import type { IconProps } from "../../../shared/types";

export function BatteryVerticalIcon({
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
      <path d="M13.5 3a1.5 1.5 0 0 1 1.395.948l.018.052H15a3 3 0 0 1 2.995 2.824L18 7v11a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h.086l.019-.052a1.5 1.5 0 0 1 1.25-.941L10.5 3z"/>
    </svg>
  );
}
