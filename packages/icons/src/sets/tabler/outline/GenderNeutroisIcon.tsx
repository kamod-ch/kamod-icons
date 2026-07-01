import type { IconProps } from "../../../shared/types";

export function GenderNeutroisIcon({
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
      <path d="M12 10a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 0V3"/>
    </svg>
  );
}
