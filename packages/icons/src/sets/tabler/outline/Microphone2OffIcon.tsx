import type { IconProps } from "../../../shared/types";

export function Microphone2OffIcon({
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
      <path d="M16.908 12.917a5 5 0 1 0-5.827-5.819m-.965 3.027-6.529 7.46a2 2 0 1 0 2.827 2.83l7.461-6.529M3 3l18 18"/>
    </svg>
  );
}
