import type { IconProps } from "../../../shared/types";

export function ArrowNarrowUpDashedIcon({
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
      <path d="M12 5v6m0 3v1.5m0 3v.5m4-10-4-4M8 9l4-4"/>
    </svg>
  );
}
