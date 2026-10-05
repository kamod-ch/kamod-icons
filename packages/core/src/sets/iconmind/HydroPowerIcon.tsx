import type { IconProps } from "../../shared/types";

export function HydroPowerIcon({
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
      <path d="m12 4 8 8a8 8 0 0 1-16 0Z"/><path d="m14 8-5 5h3l-4 4"/>
    </svg>
  );
}
