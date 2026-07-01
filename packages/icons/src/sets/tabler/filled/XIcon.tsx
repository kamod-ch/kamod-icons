import type { IconProps } from "../../../shared/types";

export function XIcon({
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
      <path d="M6.707 5.293 12 10.585l5.293-5.292a1 1 0 0 1 1.414 1.414L13.415 12l5.292 5.293a1 1 0 0 1-1.414 1.414L12 13.415l-5.293 5.292a1 1 0 1 1-1.414-1.414L10.585 12 5.293 6.707a1 1 0 0 1 1.414-1.414"/>
    </svg>
  );
}
