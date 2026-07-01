import type { IconProps } from "../../../shared/types";

export function BrandCupraIcon({
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
      <path d="M4.5 10 2 6l15.298 6.909a.2.2 0 0 1 .09.283L14 19"/><path d="m10 19-3.388-5.808a.2.2 0 0 1 .09-.283L22 6l-2.5 4"/>
    </svg>
  );
}
