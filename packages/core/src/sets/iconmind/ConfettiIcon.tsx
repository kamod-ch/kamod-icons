import type { IconProps } from "../../shared/types";

export function ConfettiIcon({
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
      <path d="m5 4 3 3m7-2 3 3M4 13l3 3m9-2 3 3m-9-7 3 3m-4 5 3 3"/>
    </svg>
  );
}
