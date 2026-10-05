import type { IconProps } from "../../shared/types";

export function ParaphraseIcon({
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
      <path d="M3 6h18M3 18h18M8 9v6m-2.5-2.5L8 15l2.5-2.5M16 9v6m-2.5-3.5L16 9l2.5 2.5"/>
    </svg>
  );
}
