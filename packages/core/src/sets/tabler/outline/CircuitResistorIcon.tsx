import type { IconProps } from "../../../shared/types";

export function CircuitResistorIcon({
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
      <path d="M2 12h2l2-5 3 10 3-10 3 10 3-10 1.5 5H22"/>
    </svg>
  );
}
