import type { IconProps } from "../../../shared/types";

export function CircuitChangeoverIcon({
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
      <path d="M2 12h2m16-5h2M4 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m12-5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m4 10h2m-6 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-8.5-6.5L16 7"/>
    </svg>
  );
}
