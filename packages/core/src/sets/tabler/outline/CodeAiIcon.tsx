import type { IconProps } from "../../../shared/types";

export function CodeAiIcon({
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
      <path d="m7 8-4 4 4 4m10-8 3.111 3.111M14 4l-2.175 8.7M14 21v-4a2 2 0 1 1 4 0v4m-4-2h4m3-4v6"/>
    </svg>
  );
}
