import type { IconProps } from "../../../shared/types";

export function ConfuciusIcon({
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
      <path d="m9 19 3 2V3m-8 7 8-2M4 18l8-10m8 10-8-8 8-4"/>
    </svg>
  );
}
