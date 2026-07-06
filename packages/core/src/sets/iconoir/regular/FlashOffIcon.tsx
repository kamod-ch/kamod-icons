import type { IconProps } from "../../../shared/types";

export function FlashOffIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.795 8.782 5 14h6v7l4-5.5m2.182-3L19 10h-6V3l-2.182 3M4 4l16 16"/>
    </svg>
  );
}
