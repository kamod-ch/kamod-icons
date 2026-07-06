import type { IconProps } from "../../../shared/types";

export function ClosedCaptionsTagIcon({
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
      <path stroke="currentColor" d="M1 15V9a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6Z"/><path stroke="currentColor" strokeLinecap="round" d="m10.5 10-.172-.172a2.83 2.83 0 0 0-2-.828v0A2.83 2.83 0 0 0 5.5 11.828v.344A2.83 2.83 0 0 0 8.328 15v0c.75 0 1.47-.298 2-.828L10.5 14m8-4-.172-.172a2.83 2.83 0 0 0-2-.828v0a2.83 2.83 0 0 0-2.828 2.828v.344A2.83 2.83 0 0 0 16.328 15v0c.75 0 1.47-.298 2-.828L18.5 14"/>
    </svg>
  );
}
