import type { IconProps } from "../../../shared/types";

export function ArrowsDoubleSwNeIcon({
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
      <path d="M14 3 3 14m0-4v4h4m10-4h4v4m-11 7 11-11"/>
    </svg>
  );
}
