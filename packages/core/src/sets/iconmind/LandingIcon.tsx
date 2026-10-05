import type { IconProps } from "../../shared/types";

export function LandingIcon({
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
      <path d="m12 3 2 2v4l5.5 5.5H14V17l2 2H8l2-2v-2.5H4.5L10 9V5ZM2 22h20M2 2l3 3M2 5h3V2"/>
    </svg>
  );
}
