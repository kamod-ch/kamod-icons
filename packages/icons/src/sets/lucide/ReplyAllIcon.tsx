import type { IconProps } from "../../shared/types";

export function ReplyAllIcon({
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
      <path d="m12 17-5-5 5-5"/><path d="M22 18v-2a4 4 0 0 0-4-4H7m0 5-5-5 5-5"/>
    </svg>
  );
}
