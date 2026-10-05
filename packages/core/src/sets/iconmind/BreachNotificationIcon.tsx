import type { IconProps } from "../../shared/types";

export function BreachNotificationIcon({
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
      <path d="M6 15v-5a6 6 0 0 1 12 0v5l2.5 2.5h-17zm8 3.5a2 2 0 0 1-4 0"/><path d="M13.5 8.5 11 11h2.5L11 13.5"/>
    </svg>
  );
}
