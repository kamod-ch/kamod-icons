import type { IconProps } from "../../shared/types";

export function TimeAlertIcon({
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
      <path d="M15.38 6.75a8 8 0 1 1-6.76 0M12 3v3M9 3h6m-3 7v5"/><path d="M11 18a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
