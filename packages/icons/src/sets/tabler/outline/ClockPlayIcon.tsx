import type { IconProps } from "../../../shared/types";

export function ClockPlayIcon({
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
      <path d="M12 7v5l2 2m3 8 5-3-5-3z"/><path d="M13.017 20.943a9 9 0 1 1 7.831-7.292"/>
    </svg>
  );
}
