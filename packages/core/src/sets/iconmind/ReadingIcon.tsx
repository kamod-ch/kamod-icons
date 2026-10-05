import type { IconProps } from "../../shared/types";

export function ReadingIcon({
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
      <path d="M12 7c-2-2-6-3-9-2v14c3-1 7 0 9 2m0-14c2-2 6-3 9-2v14c-3-1-7 0-9 2M5 11h4m6 0h4"/>
    </svg>
  );
}
