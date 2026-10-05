import type { IconProps } from "../../shared/types";

export function HearingAidIcon({
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
      <path d="M6 20A6 6 0 0 1 6 8a4 4 0 0 1 6 8m4-7a3 3 0 0 1 0 6"/><path d="M16 6a6 6 0 0 1 0 12"/>
    </svg>
  );
}
