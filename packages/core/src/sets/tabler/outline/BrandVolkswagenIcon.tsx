import type { IconProps } from "../../../shared/types";

export function BrandVolkswagenIcon({
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
      <path d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"/><path d="m5 7 4.5 11 1.5-5h2l1.5 5L19 7"/><path d="m9 4 2 6h2l2-6"/>
    </svg>
  );
}
