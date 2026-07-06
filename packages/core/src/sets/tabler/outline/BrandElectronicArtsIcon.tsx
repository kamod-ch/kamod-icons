import type { IconProps } from "../../../shared/types";

export function BrandElectronicArtsIcon({
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="m17.5 15-3-6-3 6h-5L8 12m9 2h-2m-8.5-2H10M8 9h3"/>
    </svg>
  );
}
