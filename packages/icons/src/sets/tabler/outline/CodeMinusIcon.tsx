import type { IconProps } from "../../../shared/types";

export function CodeMinusIcon({
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
      <path d="M9 12h6m-9 7a2 2 0 0 1-2-2v-4l-1-1 1-1V7a2 2 0 0 1 2-2m12 14a2 2 0 0 0 2-2v-4l1-1-1-1V7a2 2 0 0 0-2-2"/>
    </svg>
  );
}
