import type { IconProps } from "../../shared/types";

export function ArrowDown01Icon({
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
      <path d="m3 16 4 4 4-4m-4 4V4"/><rect x="15" y="4" ry="2"/><path d="M17 20v-6h-2m0 6h4"/>
    </svg>
  );
}
