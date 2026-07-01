import type { IconProps } from "../../shared/types";

export function AntennaIcon({
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
      <path d="M2 12 7 2m0 10 5-10m0 10 5-10m0 10 5-10M4.5 7h15M12 16v6"/>
    </svg>
  );
}
