import type { IconProps } from "../../shared/types";

export function BaggageClaimIcon({
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
      <path d="M6 6.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2V12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Zm4-2V2h4v2.5M2 17h20M2 21h20"/>
    </svg>
  );
}
