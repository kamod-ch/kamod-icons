import type { IconProps } from "../../shared/types";

export function ContextRecallIcon({
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
      <path d="M3 5h11M3 11h11M3 17h11m2-11.5 2 2 3-3m-5 7 2 2 3-3m-5 7 2 2 3-3"/>
    </svg>
  );
}
