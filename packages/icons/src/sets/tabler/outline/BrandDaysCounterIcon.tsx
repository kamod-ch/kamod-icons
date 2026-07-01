import type { IconProps } from "../../../shared/types";

export function BrandDaysCounterIcon({
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
      <path d="M20.779 10.007a9 9 0 1 0-10.77 10.772M13 21h8v-7"/><path d="M12 8v4l3 3"/>
    </svg>
  );
}
