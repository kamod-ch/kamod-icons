import type { IconProps } from "../../../shared/types";

export function ClefIcon({
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
      <path d="M16 12a4.16 4.16 0 0 1-5.62 3.89A3.78 3.78 0 0 1 8 12.5a3.42 3.42 0 0 1 2.34-3.38l3.79-1.42A2.89 2.89 0 0 0 16 5a2 2 0 1 0-4 0v14a2 2 0 1 1-4 0"/>
    </svg>
  );
}
