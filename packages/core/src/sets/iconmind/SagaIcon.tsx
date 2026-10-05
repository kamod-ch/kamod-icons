import type { IconProps } from "../../shared/types";

export function SagaIcon({
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
      <path d="M3 8.25A2.25 2.25 0 0 1 5.25 6h2.5A2.25 2.25 0 0 1 10 8.25a2.25 2.25 0 0 1-2.25 2.25h-2.5A2.25 2.25 0 0 1 3 8.25m11 0A2.25 2.25 0 0 1 16.25 6h2.5A2.25 2.25 0 0 1 21 8.25a2.25 2.25 0 0 1-2.25 2.25h-2.5A2.25 2.25 0 0 1 14 8.25M6 17h12m-9.5-2.5L6 17l2.5 2.5"/>
    </svg>
  );
}
