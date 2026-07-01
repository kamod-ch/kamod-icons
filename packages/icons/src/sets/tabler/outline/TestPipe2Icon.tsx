import type { IconProps } from "../../../shared/types";

export function TestPipe2Icon({
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
      <path d="M15 3v15a3 3 0 0 1-6 0V3m0 9h6M8 3h8"/>
    </svg>
  );
}
