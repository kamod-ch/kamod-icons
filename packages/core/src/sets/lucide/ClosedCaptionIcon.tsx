import type { IconProps } from "../../shared/types";

export function ClosedCaptionIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M10 9.17a3 3 0 1 0 0 5.66m7-5.66a3 3 0 1 0 0 5.66"/><rect x="2" y="5" rx="2"/>
    </svg>
  );
}
