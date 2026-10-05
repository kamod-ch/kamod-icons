import type { IconProps } from "../../shared/types";

export function VeganIcon({
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
      <path d="M12 21v-8m0 0c0-5-4-8-9-8 0 5 4 8 9 8m0 0c0-5 4-8 9-8 0 5-4 8-9 8"/>
    </svg>
  );
}
