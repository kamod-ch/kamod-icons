import type { IconProps } from "../../../shared/types";

export function ArrowRotaryLastLeftIcon({
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
      <path d="M15 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 0v6M12.5 9.5 6 3m5 0H6v5"/>
    </svg>
  );
}
