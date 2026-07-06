import type { IconProps } from "../../../shared/types";

export function DoorOffIcon({
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
      <path d="M3 21h18M6 21V6m1.18-2.825C7.43 3.063 7.708 3 8 3h8a2 2 0 0 1 2 2v9m0 4v3M3 3l18 18"/>
    </svg>
  );
}
