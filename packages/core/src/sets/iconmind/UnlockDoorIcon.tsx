import type { IconProps } from "../../shared/types";

export function UnlockDoorIcon({
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
      <path d="M4 3v18h10V3Zm13 10v6h5v-6Zm1 0v-3c0-1.5 1-2.5 2-2.5s1.5 1 1.5 2.5"/>
    </svg>
  );
}
