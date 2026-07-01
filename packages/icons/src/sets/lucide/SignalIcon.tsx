import type { IconProps } from "../../shared/types";

export function SignalIcon({
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
      <path d="M2 20h.01M7 20v-4m5 4v-8m5 8V8m5-4v16"/>
    </svg>
  );
}
