import type { IconProps } from "../../shared/types";

export function SpacerIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 4h18M3 20h18M12 8v8m-2.5-5.5L12 8l2.5 2.5m-5 3L12 16l2.5-2.5"/>
    </svg>
  );
}
