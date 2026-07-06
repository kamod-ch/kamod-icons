import type { IconProps } from "../../shared/types";

export function MicIcon({
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
      <path d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2"/><rect x="9" y="2" rx="3"/>
    </svg>
  );
}
