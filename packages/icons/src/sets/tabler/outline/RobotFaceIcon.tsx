import type { IconProps } from "../../../shared/types";

export function RobotFaceIcon({
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
      <path d="M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"/><path d="M9 16q1.5 1 3 1c1.5 0 2-.333 3-1M9 7 8 3m7 4 1-4m-7 9v-1m6 1v-1"/>
    </svg>
  );
}
