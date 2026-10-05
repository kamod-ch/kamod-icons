import type { IconProps } from "../../shared/types";

export function CompensateIcon({
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
      <path d="M4 8h13m0-2.5L19.5 8 17 10.5M7 16h13M7 13.5 4.5 16 7 18.5"/>
    </svg>
  );
}
