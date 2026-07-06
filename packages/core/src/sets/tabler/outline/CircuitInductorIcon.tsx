import type { IconProps } from "../../../shared/types";

export function CircuitInductorIcon({
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
      <path d="M2 14h3v-2a2 2 0 1 1 4 0v2-1.5a2.5 2.5 0 1 1 5 0V14v-1.5a2.5 2.5 0 1 1 5 0V14h3"/>
    </svg>
  );
}
