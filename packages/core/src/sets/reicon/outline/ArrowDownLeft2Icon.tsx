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
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M5 19.75a.75.75 0 0 1-.75-.75v-8a.75.75 0 0 1 1.5 0v6.19L18.47 4.47a.75.75 0 1 1 1.06 1.06L6.81 18.25H13a.75.75 0 0 1 0 1.5z"/>
    </svg>
  );
}
