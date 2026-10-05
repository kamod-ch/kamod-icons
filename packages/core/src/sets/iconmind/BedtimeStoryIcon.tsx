import type { IconProps } from "../../shared/types";

export function BedtimeStoryIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M12 13q-3-3-9-3v10c4 0 7 1 9 2m0-9q3-3 9-3v10c-4 0-7 1-9 2"/><path d="M14 2a5 5 0 1 0 0 10 4 4 0 0 1 0-10"/>
    </svg>
  );
}
