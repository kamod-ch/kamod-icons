import type { IconProps } from "../../../shared/types";

export function RadioactiveIcon({
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
      <path d="m13.5 14.6 3 5.19A9 9 0 0 0 21 12h-6a3 3 0 0 1-1.5 2.6m0-5.2 3-5.19a9 9 0 0 0-9 0l3 5.19a3 3 0 0 1 3 0m-3 5.2-3 5.19A9 9 0 0 1 3 12h6a3 3 0 0 0 1.5 2.6"/>
    </svg>
  );
}
