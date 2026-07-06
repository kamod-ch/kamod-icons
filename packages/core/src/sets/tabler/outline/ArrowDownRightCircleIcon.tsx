import type { IconProps } from "../../../shared/types";

export function ArrowDownRightCircleIcon({
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
      <path d="M8.464 8.464 18 18m-4 0h4v-4M8.414 8.414a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828"/>
    </svg>
  );
}
