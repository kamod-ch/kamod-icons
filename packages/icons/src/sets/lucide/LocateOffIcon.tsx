import type { IconProps } from "../../shared/types";

export function LocateOffIcon({
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
      <path d="M12 19v3m0-20v3m6.89 8.24a7 7 0 0 0-8.13-8.13M19 12h3M2 12h3M2 2l20 20M7.05 7.05a7 7 0 0 0 9.9 9.9"/>
    </svg>
  );
}
