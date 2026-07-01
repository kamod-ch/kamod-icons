import type { IconProps } from "../../shared/types";

export function RadioReceiverIcon({
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
      <path d="M5 16v2m14-2v2"/><rect x="2" y="8" rx="2"/><path d="M18 12h.01"/>
    </svg>
  );
}
