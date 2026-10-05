import type { IconProps } from "../../shared/types";

export function WarmUpHealthIcon({
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
      <path d="M9 3c1.5 3 4.5 4.5 4.5 8a4.5 4.5 0 1 1-9 0C4.5 8 7 7.5 7 5.5 7.5 6 9 6 9 3m10 17V8m-3 3 3-3 3 3"/>
    </svg>
  );
}
