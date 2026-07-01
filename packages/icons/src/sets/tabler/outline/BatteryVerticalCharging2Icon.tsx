import type { IconProps } from "../../../shared/types";

export function BatteryVerticalCharging2Icon({
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
      <path d="M7 18V7a2 2 0 0 1 2-2h.5c.276 0 .5-.224.5-.5s.224-.5.5-.5h3c.276 0 .5.224.5.5s.224.5.5.5h.5a2 2 0 0 1 2 2v1M7 18a2 2 0 0 0 2 2h1m2-6h6v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm3 7v-3m-2-4v-2.5m4 2.5v-2.5"/>
    </svg>
  );
}
