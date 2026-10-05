import type { IconProps } from "../../shared/types";

export function ReflectionIcon({
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
      <path d="M8.5 18.06a7 7 0 0 1 0-12.12m7 0a7 7 0 0 1 0 12.12M12 4v5m0 6v5"/>
    </svg>
  );
}
