import type { IconProps } from "../../../shared/types";

export function ExpandIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 9 4 4m0 0v4m0-4h4m7 5 5-5m0 0v4m0-4h-4M9 15l-5 5m0 0v-4m0 4h4m7-5 5 5m0 0v-4m0 4h-4"/>
    </svg>
  );
}
