import type { IconProps } from "../../../shared/types";

export function BrandMixpanelIcon({
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
      <path d="M2 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0m17 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0m-8 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
