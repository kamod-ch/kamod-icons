import type { IconProps } from "../../../shared/types";

export function BabyBottleIcon({
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
      <path d="M5 10h14m-7-8v2m0 0a5 5 0 0 1 5 5v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a5 5 0 0 1 5-5"/>
    </svg>
  );
}
