import type { IconProps } from "../../../shared/types";

export function ArrowNarrowDownDashedIcon({
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
      <path d="M12 5v.5m0 3V10m0 3v6m4-4-4 4m-4-4 4 4"/>
    </svg>
  );
}
