import type { IconProps } from "../../../shared/types";

export function ArrowElbowRightIcon({
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
      <path d="M21 14V8h-6"/><path d="m21 8-9 9-9-9"/>
    </svg>
  );
}
