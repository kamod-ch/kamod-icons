import type { IconProps } from "../../../shared/types";

export function CircuitDiodeZenerIcon({
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
      <path d="M22 12h-6M2 12h6m0-5 8 5-8 5z"/><path d="M14 7h2v10h2"/>
    </svg>
  );
}
