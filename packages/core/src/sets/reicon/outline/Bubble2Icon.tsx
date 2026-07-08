import type { IconProps } from "../../../shared/types";

export function Bubble2Icon({
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
      <path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M15.59 12.26a5.13 5.13 0 1 0 0-10.26 5.13 5.13 0 0 0 0 10.26Zm-9.23 7.18a3.08 3.08 0 1 0 0-6.16 3.08 3.08 0 0 0 0 6.16ZM16.62 22a2.56 2.56 0 1 0 0-5.12 2.56 2.56 0 0 0 0 5.12Z"/>
    </svg>
  );
}
