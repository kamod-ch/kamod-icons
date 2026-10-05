import type { IconProps } from "../../shared/types";

export function LipSyncIcon({
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
      <path d="M14.5 10a5.5 5.5 0 0 1-11 0m15.62-2.12a3 3 0 0 1 0 4.24m1.42-5.66a5 5 0 0 1 0 7.08"/>
    </svg>
  );
}
