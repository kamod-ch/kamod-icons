import type { IconProps } from "../../../shared/types";

export function CheckIcon({
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
      <path fill="currentColor" d="M21.53 5.47a.75.75 0 0 1 0 1.06l-12 12a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06L9 16.94 20.47 5.47a.75.75 0 0 1 1.06 0Z"/>
    </svg>
  );
}
