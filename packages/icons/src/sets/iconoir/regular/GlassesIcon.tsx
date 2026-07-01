import type { IconProps } from "../../../shared/types";

export function GlassesIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 14a4 4 0 1 0 8 0 4 4 0 0 0-8 0m0 0V6m20 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0m0 0V6m-8 8h-4"/>
    </svg>
  );
}
