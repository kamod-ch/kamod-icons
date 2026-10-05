import type { IconProps } from "../../shared/types";

export function GreedyDecodeIcon({
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
      <path d="M2 12h15.5m0-2.5L20 12l-2.5 2.5M6 12l5-5m-1 5 5 5"/>
    </svg>
  );
}
