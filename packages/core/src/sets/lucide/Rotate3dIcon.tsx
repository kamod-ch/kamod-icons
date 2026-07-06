import type { IconProps } from "../../shared/types";

export function Rotate3dIcon({
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
      <path d="m15.194 13.707 3.814 1.86-1.86 3.814m-.676-11.853A5 10 0 1 0 13 21.798"/><path d="M21.798 11A10 5 0 1 0 19 15.57"/>
    </svg>
  );
}
