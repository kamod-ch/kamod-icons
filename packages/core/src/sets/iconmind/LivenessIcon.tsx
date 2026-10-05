import type { IconProps } from "../../shared/types";

export function LivenessIcon({
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
      <path d="M5 6h3l2-2 4 4 2-2h3m-4.68 4a5.5 5.5 0 1 1-4.64 0"/>
    </svg>
  );
}
