import type { IconProps } from "../../../shared/types";

export function BrandBandlabIcon({
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
      <path d="m6.885 7-2.536 4.907C2.328 15.752 1.85 20.682 8.17 21h6.808c4.86-.207 7.989-2.975 4.607-9.093L16.597 7"/><path d="M15.078 4H9.942l3.678 8.768c.547 1.14.847 1.822.162 2.676-.053.093-1.332 1.907-3.053 1.495-.825-.187-1.384-.926-1.32-1.74.04-.91.62-1.717 1.488-2.074a4.46 4.46 0 0 1 2.723-.358"/>
    </svg>
  );
}
