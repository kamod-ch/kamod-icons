import type { IconProps } from "../../../shared/types";

export function ArrowsRightLeftIcon({
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
      <path d="M21 7H3m15 3 3-3-3-3M6 20l-3-3 3-3m-3 3h18"/>
    </svg>
  );
}
