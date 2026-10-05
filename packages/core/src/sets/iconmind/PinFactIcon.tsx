import type { IconProps } from "../../shared/types";

export function PinFactIcon({
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
      <path d="M4 15v4h16v-4M10 7.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="m9.5 9 2.5 2.5L14.5 9"/>
    </svg>
  );
}
