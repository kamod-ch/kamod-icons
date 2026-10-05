import type { IconProps } from "../../shared/types";

export function TripPlanIcon({
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
      <path d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm5-2v20"/><path d="M12 18v-6h5V6"/><path d="M11 18a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5-12a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
