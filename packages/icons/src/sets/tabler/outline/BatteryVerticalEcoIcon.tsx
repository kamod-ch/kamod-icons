import type { IconProps } from "../../../shared/types";

export function BatteryVerticalEcoIcon({
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
      <path d="M7 18V7a2 2 0 0 1 2-2h.5c.276 0 .5-.224.5-.5s.224-.5.5-.5h3c.276 0 .5.224.5.5s.224.5.5.5h.5a2 2 0 0 1 2 2v1M9 20a2 2 0 0 1-2-2m6-.857C13 14.303 15.09 12 17.667 12H20v.857C20 15.697 17.91 18 15.333 18H13zM13 21v-3"/>
    </svg>
  );
}
