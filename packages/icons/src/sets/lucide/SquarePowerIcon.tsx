import type { IconProps } from "../../shared/types";

export function SquarePowerIcon({
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
      <path d="M12 7v4M7.998 9.003a5 5 0 1 0 8-.005"/><rect x="3" y="3" rx="2"/>
    </svg>
  );
}
