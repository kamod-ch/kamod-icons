import type { IconProps } from "../../../shared/types";

export function NoiseReductionIcon({
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
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-10.99 6H10m4.01-4H14m2.01-2H16m2.01-2H18m-1.99 6H16m-1.99 2H14m4.01-4H18m-5.99 2H12"/>
    </svg>
  );
}
