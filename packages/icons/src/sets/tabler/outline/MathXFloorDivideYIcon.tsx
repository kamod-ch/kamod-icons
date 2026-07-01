import type { IconProps } from "../../../shared/types";

export function MathXFloorDivideYIcon({
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
      <path d="m1.5 19 18-18m-15 21 18-18M18 15l3 4m2-4-4.5 8M1 1l6 6M1 7l6-6"/>
    </svg>
  );
}
