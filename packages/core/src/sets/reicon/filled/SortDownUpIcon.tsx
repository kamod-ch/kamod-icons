import type { IconProps } from "../../../shared/types";

export function SortDownUpIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M13.386 9.941a2 2 0 0 1-2.772 0L5.055 4.598C3.887 3.474 4.682 1.5 6.303 1.5h11.394c1.62 0 2.415 1.974 1.247 3.098zm0 4.118a2 2 0 0 0-2.772 0l-5.559 5.343C3.887 20.526 4.682 22.5 6.303 22.5h11.394c1.62 0 2.415-1.974 1.247-3.098z"/>
    </svg>
  );
}
