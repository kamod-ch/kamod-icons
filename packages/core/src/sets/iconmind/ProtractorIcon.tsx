import type { IconProps } from "../../shared/types";

export function ProtractorIcon({
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
      <path d="M3 17a9 9 0 0 1 18 0M3 17h18"/><path d="M7 17a5 5 0 0 1 10 0m-5-9v3"/>
    </svg>
  );
}
