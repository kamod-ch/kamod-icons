import type { IconProps } from "../../../shared/types";

export function ExclamationMarkOffIcon({
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
      <path d="M12 19v.01M12 15v-3m0-4V5M3 3l18 18"/>
    </svg>
  );
}
