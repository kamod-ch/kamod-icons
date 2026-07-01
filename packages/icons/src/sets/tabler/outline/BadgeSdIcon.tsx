import type { IconProps } from "../../../shared/types";

export function BadgeSdIcon({
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
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M14 9v6h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm-7 5.25c0 .414.336.75.75.75H9a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1.25a.75.75 0 0 1 .75.75"/>
    </svg>
  );
}
