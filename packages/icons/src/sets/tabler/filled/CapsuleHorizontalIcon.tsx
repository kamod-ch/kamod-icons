import type { IconProps } from "../../../shared/types";

export function CapsuleHorizontalIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M15 5H9a7 7 0 1 0 0 14h6a7 7 0 0 0 7-7l-.007-.303A7 7 0 0 0 15 5"/>
    </svg>
  );
}
