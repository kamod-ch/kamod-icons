import type { IconProps } from "../../shared/types";

export function CommunicationIcon({
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
      <path d="M2 7a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6a4 4 0 0 1-4-4m3 4v3l3-3m1 6a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4 4 4 0 0 1-4 4h-5a4 4 0 0 1-4-4m10-4v-3l-3 3"/>
    </svg>
  );
}
