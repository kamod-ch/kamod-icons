import type { IconProps } from "../../shared/types";

export function BranchStepIcon({
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
      <path d="M5 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0m7.5-2.5L19 3m-6.5 11.5L19 21"/>
    </svg>
  );
}
