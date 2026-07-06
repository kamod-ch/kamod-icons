import type { IconProps } from "../../../shared/types";

export function RouteScanIcon({
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
      <path d="M3 7V5a2 2 0 0 1 2-2h2M3 17v2a2 2 0 0 0 2 2h2M17 3h2a2 2 0 0 1 2 2v2m-4 14h2a2 2 0 0 0 2-2v-2M7 12V9h3m4 0h3v3"/><path d="m7 9 4.414 4.414A2 2 0 0 1 12 14.828V17m5-8-4.414 4.414A2 2 0 0 0 12 14.828V17"/>
    </svg>
  );
}
