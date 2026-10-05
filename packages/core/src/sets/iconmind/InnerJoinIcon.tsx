import type { IconProps } from "../../shared/types";

export function InnerJoinIcon({
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
      <path d="M12 3.63a8.5 8.5 0 0 1 0 16.74m0 0a8.5 8.5 0 0 1 0-16.74"/>
    </svg>
  );
}
