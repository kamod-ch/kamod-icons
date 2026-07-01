import type { IconProps } from "../../../shared/types";

export function LocationBrokenIcon({
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
      <path d="M12.896 19.792 10 14l-7-3.5a.55.55 0 0 1 0-1L21 3l-3.487 9.657M21.5 21.5l-5-5m0 5 5-5"/>
    </svg>
  );
}
