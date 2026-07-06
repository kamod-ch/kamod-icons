import type { IconProps } from "../../shared/types";

export function VenusAndMarsIcon({
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
      <path d="M10 20h4m-2-4v6m5-20h4v4m0-4-5.46 5.46"/><circle cx="12" cy="11" r="5"/>
    </svg>
  );
}
