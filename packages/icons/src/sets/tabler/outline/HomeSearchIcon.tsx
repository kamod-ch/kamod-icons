import type { IconProps } from "../../../shared/types";

export function HomeSearchIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="m21 12-9-9-9 9h2v7a2 2 0 0 0 2 2h4.7"/><path d="M9 21v-6a2 2 0 0 1 2-2h2m2 5a3 3 0 1 0 6 0 3 3 0 1 0-6 0m5.2 2.2L22 22"/>
    </svg>
  );
}
