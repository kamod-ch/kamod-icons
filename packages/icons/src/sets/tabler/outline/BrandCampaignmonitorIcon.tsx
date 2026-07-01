import type { IconProps } from "../../../shared/types";

export function BrandCampaignmonitorIcon({
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
      <path d="m3 18 9-6.462L3 6zh18V6l-9 5.538"/>
    </svg>
  );
}
