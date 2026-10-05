import type { IconProps } from "../../shared/types";

export function LivingRoomIcon({
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
      <path d="M2 17V9h8v8m-8-4h8m3-3 3-3h3l3 3Zm4.5 0v9m-2 0h4"/>
    </svg>
  );
}
