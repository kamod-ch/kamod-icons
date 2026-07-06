import type { IconProps } from "../../../shared/types";

export function Certificate2Icon({
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
      <path d="M9 15a3 3 0 1 0 6 0 3 3 0 1 0-6 0m1-8h4"/><path d="M10 18v4l2-1 2 1v-4"/><path d="M10 19H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2"/>
    </svg>
  );
}
