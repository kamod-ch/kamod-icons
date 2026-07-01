import type { IconProps } from "../../shared/types";

export function ArrowUpFromLineIcon({
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
      <path d="m18 9-6-6-6 6m6-6v14m-7 4h14"/>
    </svg>
  );
}
