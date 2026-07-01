import type { IconProps } from "../../shared/types";

export function ArrowLeftFromLineIcon({
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
      <path d="m9 6-6 6 6 6m-6-6h14m4 7V5"/>
    </svg>
  );
}
