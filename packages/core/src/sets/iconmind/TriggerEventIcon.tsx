import type { IconProps } from "../../shared/types";

export function TriggerEventIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M6 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m5.54-3.54a5 5 0 0 1 0 7.08m2.12-9.2a8 8 0 0 1 0 11.32M16 12h4m-3-3 3 3-3 3"/>
    </svg>
  );
}
