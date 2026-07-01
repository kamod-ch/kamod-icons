import type { IconProps } from "../../shared/types";

export function WifiPenIcon({
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
      <path d="M2 8.82a15 15 0 0 1 20 0m-.622 7.806a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506zM5 12.859a10 10 0 0 1 10.5-2.222m-7 5.792a5 5 0 0 1 3-1.406"/>
    </svg>
  );
}
