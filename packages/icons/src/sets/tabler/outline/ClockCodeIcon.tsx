import type { IconProps } from "../../../shared/types";

export function ClockCodeIcon({
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
      <path d="M20.931 13.111a9 9 0 1 0-9.453 7.874M20 21l2-2-2-2m-3 0-2 2 2 2"/><path d="M12 7v5l2 2"/>
    </svg>
  );
}
