import type { IconProps } from "../../../shared/types";

export function DoorHangerIcon({
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
      <path d="M12 3a7 7 0 0 0-5.48 2.64 1 1 0 0 0 .31 1.49l1.76 1A1 1 0 0 0 9.81 8a3 3 0 0 1 2.82-.88A3.09 3.09 0 0 1 15 10.13V11l-9.2 1.84a1 1 0 0 0-.8 1V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9.72A7.18 7.18 0 0 0 12 3m0 14v.01"/>
    </svg>
  );
}
