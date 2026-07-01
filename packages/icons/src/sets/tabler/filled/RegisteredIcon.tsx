import type { IconProps } from "../../../shared/types";

export function RegisteredIcon({
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
      <path d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M12 8h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 11 15v-1h.585l1.708 1.707a1 1 0 0 0 1.414-1.414l-.9-.899A3 3 0 0 0 12 8m0 2a1 1 0 0 1 0 2h-1v-2z"/>
    </svg>
  );
}
