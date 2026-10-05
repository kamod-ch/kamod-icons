import type { IconProps } from "../../shared/types";

export function ContainerShipIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="m2 14 4 4h12l4-4M7 9.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2V12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2Z"/>
    </svg>
  );
}
