import type { IconProps } from "../../../shared/types";

export function SpadesIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 14.5c3 4.5 9 4.47 9-.5 0-4-4-7-9-12-5 5-9 8-9 12 0 4.97 6 5 9 .5"/><path stroke="currentColor" strokeLinecap="round" d="m11.47 15.493-3 5.625A.6.6 0 0 0 9 22h6a.6.6 0 0 0 .53-.882l-3-5.625a.6.6 0 0 0-1.06 0Z"/>
    </svg>
  );
}
