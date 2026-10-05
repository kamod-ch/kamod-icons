import type { IconProps } from "../../shared/types";

export function ViolinIcon({
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
      <path d="M12 21c-4 0-8-1.5-8-4s5-3.5 5-5-3.5-2-3.5-3.5S8 6 10 6h4c2 0 4.5 1 4.5 2.5S15 10.5 15 12s5 2.5 5 5-4 4-8 4m0-19v4m-4 9v3m8-3v3"/>
    </svg>
  );
}
