import type { IconProps } from "../../shared/types";

export function RulerDimensionLineIcon({
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
      <path d="M10 15v-3m4 3v-3m4 3v-3M2 8V4m20 2H2m20 2V4M6 15v-3"/><rect x="2" y="12" rx="2"/>
    </svg>
  );
}
