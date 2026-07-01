import type { IconProps } from "../../../shared/types";

export function ArrowDownTailIcon({
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
      <path d="M12 6v15m-3-3 3 3 3-3M9 3l3 3 3-3"/>
    </svg>
  );
}
