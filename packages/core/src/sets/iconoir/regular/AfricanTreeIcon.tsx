import type { IconProps } from "../../../shared/types";

export function AfricanTreeIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22V12m0-4v4m0 0 3-3m-2.576 9.576 6.169-6.169a5.502 5.502 0 0 0-.513-8.234 9.904 9.904 0 0 0-12.16 0 5.502 5.502 0 0 0-.513 8.234l6.169 6.169a.6.6 0 0 0 .848 0"/>
    </svg>
  );
}
