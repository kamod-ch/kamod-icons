import type { IconProps } from "../../../shared/types";

export function Rating14PlusIcon({
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m4 3V9m8.5 3h3M17 10.5v3"/><path d="M12.5 15V9M10 9v4h3"/>
    </svg>
  );
}
