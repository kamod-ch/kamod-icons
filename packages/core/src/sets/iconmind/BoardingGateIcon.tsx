import type { IconProps } from "../../shared/types";

export function BoardingGateIcon({
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
      <path d="M4 21V4h4v17m12 0V4h-4v17m-6-9h4.5M12 9.5l2.5 2.5-2.5 2.5"/>
    </svg>
  );
}
