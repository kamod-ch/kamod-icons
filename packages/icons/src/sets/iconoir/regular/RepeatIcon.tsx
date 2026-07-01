import type { IconProps } from "../../../shared/types";

export function RepeatIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 17H8c-1.667 0-5-1-5-5s3.333-5 5-5h8c1.667 0 5 1 5 5 0 1.494-.465 2.57-1.135 3.331"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.5 14.5 17 17l-2.5 2.5"/>
    </svg>
  );
}
