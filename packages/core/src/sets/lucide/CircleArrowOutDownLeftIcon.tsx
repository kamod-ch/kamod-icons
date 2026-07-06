import type { IconProps } from "../../shared/types";

export function CircleArrowOutDownLeftIcon({
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
      <path d="M2 12a10 10 0 1 1 10 10M2 22l10-10M8 22H2v-6"/>
    </svg>
  );
}
