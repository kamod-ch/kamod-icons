import type { IconProps } from "../../../shared/types";

export function ArrowUpFromArcIcon({
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
      <path d="M12 9v12m-4-4 4 4 4-4m5-5a9 9 0 0 0-18 0"/>
    </svg>
  );
}
