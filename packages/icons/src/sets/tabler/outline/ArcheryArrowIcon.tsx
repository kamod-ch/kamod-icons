import type { IconProps } from "../../../shared/types";

export function ArcheryArrowIcon({
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
      <path d="M14 7v3h3l3-3h-3V4zm0 3-9 9m0-4v4h4"/>
    </svg>
  );
}
