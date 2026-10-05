import type { IconProps } from "../../shared/types";

export function FrozenLayerIcon({
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
      <path d="M3 4h18M3 12a2.5 2.5 0 0 1 2.5-2.5h13A2.5 2.5 0 0 1 21 12a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 12m0 8h18"/>
    </svg>
  );
}
