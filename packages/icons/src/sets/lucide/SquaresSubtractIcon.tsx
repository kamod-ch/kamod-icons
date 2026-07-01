import type { IconProps } from "../../shared/types";

export function SquaresSubtractIcon({
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
      <path d="M10 22a2 2 0 0 1-2-2m8 2h-2m2-18a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1zm4 4a2 2 0 0 1 2 2m0 4v2m0 4a2 2 0 0 1-2 2"/>
    </svg>
  );
}
