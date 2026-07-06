import type { IconProps } from "../../shared/types";

export function PanelLeftRightDashedIcon({
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
      <path d="M15 10V9m0 6v-1m0 7v-2m0-14V3m-6 7V9m0 6v-1m0 7v-2M9 5V3"/><rect x="3" y="3" rx="2"/>
    </svg>
  );
}
