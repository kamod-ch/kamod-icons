import type { IconProps } from "../../../shared/types";

export function CellarIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 21h18v-9a9 9 0 1 0-18 0zm0-4h18"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 17v-4h12m-8 0V9h7"/>
    </svg>
  );
}
