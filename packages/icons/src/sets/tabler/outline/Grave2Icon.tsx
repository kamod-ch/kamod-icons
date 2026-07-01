import type { IconProps } from "../../../shared/types";

export function Grave2Icon({
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
      <path d="M7 16.17V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v9.171M12 7v5m-2-3h4"/><path d="M5 21v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2z"/>
    </svg>
  );
}
