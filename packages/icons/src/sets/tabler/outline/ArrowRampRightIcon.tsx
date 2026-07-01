import type { IconProps } from "../../../shared/types";

export function ArrowRampRightIcon({
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
      <path d="M7 3v8.707M11 7 7 3 3 7m14 7 4-4-4-4"/><path d="M7 21a11 11 0 0 1 11-11h3"/>
    </svg>
  );
}
