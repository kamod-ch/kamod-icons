import type { IconProps } from "../../../shared/types";

export function Convert2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.005 21.984c5.512 0 9.98-4.468 9.98-9.979s-4.468-9.98-9.98-9.98c-5.511 0-9.98 4.469-9.98 9.98s4.469 9.98 9.98 9.98"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6.137 4.022 8.163 8.183.02-4.54m3.543 12.313L9.7 11.805l-.02 4.531"/>
    </svg>
  );
}
