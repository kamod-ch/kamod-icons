import type { IconProps } from "../../../shared/types";

export function AsteriskIcon({
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
      <path d="m12 12 8-4.5M12 12v9m0-9L4 7.5m8 4.5 8 4.5M12 3v9m0 0-8 4.5"/>
    </svg>
  );
}
