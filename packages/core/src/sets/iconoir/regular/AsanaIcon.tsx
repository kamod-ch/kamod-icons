import type { IconProps } from "../../../shared/types";

export function AsanaIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 11.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8m-5 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8m10 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>
    </svg>
  );
}
