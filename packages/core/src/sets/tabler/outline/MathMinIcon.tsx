import type { IconProps } from "../../../shared/types";

export function MathMinIcon({
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
      <path d="M15 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/><path d="M3 13s1-9 4-9c2.48 0 5.643 9.565 8.36 12.883m3.388.155Q19.801 15.718 21 9"/>
    </svg>
  );
}
