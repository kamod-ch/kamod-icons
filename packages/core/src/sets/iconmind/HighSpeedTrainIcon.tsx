import type { IconProps } from "../../shared/types";

export function HighSpeedTrainIcon({
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
      <path d="M2 18v-6l7-7h9a2 2 0 0 1 2 2v11Zm7-6h11M3 21h18"/>
    </svg>
  );
}
