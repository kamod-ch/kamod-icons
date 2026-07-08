import type { IconProps } from "../../../shared/types";

export function ArrowDownLeft2Icon({
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
      <path fill="currentColor" d="M5 20a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v5.586L18.293 4.293a1 1 0 1 1 1.414 1.414L7.414 18H13a1 1 0 1 1 0 2z"/>
    </svg>
  );
}
