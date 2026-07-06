import type { IconProps } from "../../../shared/types";

export function GenderIntergenderIcon({
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
      <path d="M13.5 11.5 20 18v-4m-8.5-.5L18 20M9 4a5 5 0 1 1 0 10A5 5 0 0 1 9 4m5 16 2-2"/>
    </svg>
  );
}
