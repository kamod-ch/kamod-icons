import type { IconProps } from "../../shared/types";

export function BadgeUnlockIcon({
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
      <path d="M12 2a6.5 6.5 0 1 1 0 13 6.5 6.5 0 1 1 0-13M9.5 14.5V22l2.5-2.5 2.5 2.5v-7.5"/><path d="M10 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 2v3"/>
    </svg>
  );
}
