import type { IconProps } from "../../../shared/types";

export function SignalLteIcon({
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
      <path d="M21 8h-4v8h4m-4-4h2.5M4 8v8h4m2-8h4m-2 0v8"/>
    </svg>
  );
}
