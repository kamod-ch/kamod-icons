import type { IconProps } from "../../shared/types";

export function FallbackModelIcon({
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
      <path d="M12 2.5 16.5 7 12 11.5 7.5 7Zm0 9V16m0 0 2.5 2.5L12 21l-2.5-2.5Z"/>
    </svg>
  );
}
