import type { IconProps } from "../../shared/types";

export function WindTurbineIcon({
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
      <path d="M12 9v12m-4 0h8M11 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0m1-6v5m1 2 5 5m-7-5-5 5"/>
    </svg>
  );
}
