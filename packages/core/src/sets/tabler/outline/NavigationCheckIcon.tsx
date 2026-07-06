import type { IconProps } from "../../../shared/types";

export function NavigationCheckIcon({
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
      <path d="M17.487 14.894 12 3 4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116l6.275-2.127M15 19l2 2 4-4"/>
    </svg>
  );
}
