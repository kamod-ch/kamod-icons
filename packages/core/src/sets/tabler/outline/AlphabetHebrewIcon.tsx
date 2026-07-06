import type { IconProps } from "../../../shared/types";

export function AlphabetHebrewIcon({
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
      <path d="M7 6c2.333 5.143 6.611 6.857 9.333 12"/><path d="M13.667 14c2.505-1.5 2.666-4.141 2.666-5.333C16.333 6.889 15.89 6 15.89 6M7.485 18S7 17.095 7 15.286c0-1.172.164-3.722 2.641-5.27"/>
    </svg>
  );
}
