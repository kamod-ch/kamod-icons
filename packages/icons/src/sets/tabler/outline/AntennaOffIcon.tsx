import type { IconProps } from "../../../shared/types";

export function AntennaOffIcon({
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
      <path d="M20 4v8m-4-7.5v7M12 5v3m0 4v9M8 8v2.5M4 6v4m16-2h-8M8 8H4M3 3l18 18"/>
    </svg>
  );
}
