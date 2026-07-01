import type { IconProps } from "../../../shared/types";

export function ClockExclamationIcon({
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
      <path d="M20.986 12.502a9 9 0 1 0-5.973 7.98"/><path d="M12 7v5l3 3m4 1v3m0 3v.01"/>
    </svg>
  );
}
