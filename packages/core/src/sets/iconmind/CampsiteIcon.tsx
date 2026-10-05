import type { IconProps } from "../../shared/types";

export function CampsiteIcon({
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
      <path d="m2 14 5-5 5 5Zm10 0 5-5 5 5Zm-5-3v3m10-3v3M2 17h20"/>
    </svg>
  );
}
