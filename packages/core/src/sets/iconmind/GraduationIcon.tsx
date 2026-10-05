import type { IconProps } from "../../shared/types";

export function GraduationIcon({
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
      <path d="m2 10 4-4h12l4 4-4 4H6Zm6 4v3l3 3h3l3-3v-3m5-4v6"/>
    </svg>
  );
}
