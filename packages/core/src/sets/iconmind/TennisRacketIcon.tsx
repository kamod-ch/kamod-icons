import type { IconProps } from "../../shared/types";

export function TennisRacketIcon({
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
      <path d="M12 3c4 0 7 3 7 7s-3 7-7 7-7-3-7-7 3-7 7-7M9 5v10m6-10v10m-3 2v4"/>
    </svg>
  );
}
