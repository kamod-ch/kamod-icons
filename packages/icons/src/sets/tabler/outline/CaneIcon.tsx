import type { IconProps } from "../../../shared/types";

export function CaneIcon({
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
      <path d="m9 21 6.324-11.69c.54-.974 1.756-4.104-1.499-5.762S8.65 4.411 8 5.58"/>
    </svg>
  );
}
