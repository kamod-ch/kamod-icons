import type { IconProps } from "../../shared/types";

export function FloodWarningIcon({
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
      <path d="M12 3.5 21.5 20h-19Z"/><path d="M7 15.5 9.5 13l2.5 2.5 2.5-2.5 2.5 2.5"/>
    </svg>
  );
}
