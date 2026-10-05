import type { IconProps } from "../../shared/types";

export function EpochIcon({
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
      <path d="M12 3a9 9 0 1 1-9 9"/><path d="M12 6a6 6 0 1 1-6 6"/><path d="M12 9a3 3 0 1 1-3 3"/>
    </svg>
  );
}
