import type { IconProps } from "../../../shared/types";

export function ArrowRotaryFirstLeftIcon({
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
      <path d="M16 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 0v10M13.5 9.5 5 18m5 0H5v-5"/>
    </svg>
  );
}
