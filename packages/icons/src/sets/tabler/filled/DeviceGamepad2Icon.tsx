import type { IconProps } from "../../../shared/types";

export function DeviceGamepad2Icon({
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
      <path d="M15.5 4a6 6 0 0 1 5.945 5.187l1.532 7.883a3.3 3.3 0 0 1-5.632 2.903l-3.776-3.974-3.14.001-3.719 3.916a3.3 3.3 0 0 1-5.629-2.92l1.634-8.173A6 6 0 0 1 8.6 4zM8 7a1 1 0 0 0-1 1v1H6a1 1 0 1 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2H9V8a1 1 0 0 0-1-1m10 2h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2"/>
    </svg>
  );
}
