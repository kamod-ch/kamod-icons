import type { IconProps } from "../../../shared/types";

export function PilcrowLeftIcon({
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
      <path d="M11 9H9a3 3 0 1 1 0-6h7m-5 0v11m4-11v11M3 18h18M6 15l-3 3 3 3"/>
    </svg>
  );
}
