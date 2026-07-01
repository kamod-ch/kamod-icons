import type { IconProps } from "../../../shared/types";

export function Percentage80Icon({
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
      <path fill="currentColor" stroke="none" d="M12 3a9 9 0 1 1-8.497 6.025L12 12z"/><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"/>
    </svg>
  );
}
