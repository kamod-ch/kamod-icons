import type { IconProps } from "../../../shared/types";

export function NoCopyrightIcon({
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="M14 9.75a3.016 3.016 0 0 0-4.163.173 2.993 2.993 0 0 0 0 4.154A3.016 3.016 0 0 0 14 14.25M6 6l1.5 1.5m9 9L18 18"/>
    </svg>
  );
}
