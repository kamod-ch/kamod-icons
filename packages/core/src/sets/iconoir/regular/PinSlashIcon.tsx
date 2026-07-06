import type { IconProps } from "../../../shared/types";

export function PinSlashIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 14.5 3 21M7.676 7.89l-.979-.102L5 9.485l9.193 9.193 1.697-1.697-.102-.981m-4.303-9 3.672-4.329 5.85 5.85-4.308 3.654M3 3l18 18"/>
    </svg>
  );
}
