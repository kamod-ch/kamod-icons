import type { IconProps } from "../../../shared/types";

export function SignalHPlusIcon({
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
      <path d="M7 16V8m4 0v8m-4-4h4m3 0h4m-2-2v4"/>
    </svg>
  );
}
