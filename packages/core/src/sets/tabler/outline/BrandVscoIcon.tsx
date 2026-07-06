import type { IconProps } from "../../../shared/types";

export function BrandVscoIcon({
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
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"/><path d="M17 12a5 5 0 1 0-10 0 5 5 0 0 0 10 0m-5-9v4m9 5h-4m-5 9v-4m-9-5h4m11.364-6.364-2.828 2.828m2.828 9.9-2.828-2.828m-9.9 2.828 2.828-2.828m-2.828-9.9 2.828 2.828"/>
    </svg>
  );
}
