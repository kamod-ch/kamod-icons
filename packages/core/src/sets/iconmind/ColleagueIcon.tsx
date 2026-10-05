import type { IconProps } from "../../shared/types";

export function ColleagueIcon({
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
      <path d="M5 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0m-1 9a4 4 0 0 1 8 0m2-4v8h8v-8Zm2 0V9h4v3"/>
    </svg>
  );
}
