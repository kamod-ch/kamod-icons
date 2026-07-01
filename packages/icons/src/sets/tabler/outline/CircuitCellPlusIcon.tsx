import type { IconProps } from "../../../shared/types";

export function CircuitCellPlusIcon({
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
      <path d="M2 12h9m4 0h7M11 5v14m4-10v6M3 5h4M5 3v4"/>
    </svg>
  );
}
