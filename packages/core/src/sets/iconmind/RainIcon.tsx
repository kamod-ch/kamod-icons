import type { IconProps } from "../../shared/types";

export function RainIcon({
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
      <path d="M4 14a4 4 0 0 1 2-7.5A5 5 0 0 1 15.5 5a5.5 5.5 0 0 1 4.5 9Zm3 2.5L9.5 19a2.5 2.5 0 0 1-5 0Zm5 1 2.5 2.5a2.5 2.5 0 0 1-5 0Zm5-1 2.5 2.5a2.5 2.5 0 0 1-5 0Z"/>
    </svg>
  );
}
