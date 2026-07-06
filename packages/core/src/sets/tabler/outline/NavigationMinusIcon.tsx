import type { IconProps } from "../../../shared/types";

export function NavigationMinusIcon({
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
      <path d="M17.5 15Q15.652 10.995 12 3L4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116L12 18.5m4 .5h6"/>
    </svg>
  );
}
