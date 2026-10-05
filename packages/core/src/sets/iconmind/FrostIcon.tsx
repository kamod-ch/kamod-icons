import type { IconProps } from "../../shared/types";

export function FrostIcon({
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
      <path d="M2 18h20M7 7.5v7m-3.5 0 7-7m6.5 0v7m-3.5 0 7-7M12 9v9"/>
    </svg>
  );
}
