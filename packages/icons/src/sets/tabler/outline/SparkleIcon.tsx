import type { IconProps } from "../../../shared/types";

export function SparkleIcon({
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
      <path d="M21 12c-6.597 0-9 2.403-9 9 0-6.597-2.403-9-9-9 6.597 0 9-2.403 9-9 0 6.597 2.403 9 9 9"/>
    </svg>
  );
}
