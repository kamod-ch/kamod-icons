import type { IconProps } from "../../../shared/types";

export function AnchorIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" strokeWidth="1.333"><path d="m22.504 13.495-1.333-2.042a1 1 0 0 0-1.837.547c0 3.704-2.763 6.767-6.334 7.257V7a1 1 0 0 0-2 0v12.257c-3.57-.49-6.333-3.553-6.333-7.257a1 1 0 0 0-1.838-.547l-1.333 2.042a.999.999 0 0 0 1.575 1.222A9.34 9.34 0 0 0 11 21.25v.416a1 1 0 0 0 2 0v-.416c3.755-.405 6.859-3.017 7.93-6.532a1 1 0 0 0 1.574-1.222Z"/><path d="M12 8c-1.837 0-3.333-1.496-3.333-3.333S10.163 1.333 12 1.333s3.333 1.496 3.333 3.334S13.837 8 12 8Zm0-4.667A1.335 1.335 0 0 0 12 6c.735 0 1.333-.599 1.333-1.333S12.735 3.333 12 3.333ZM14.333 12H9.667a1 1 0 0 1 0-2h4.666a1 1 0 0 1 0 2Z"/></g>
    </svg>
  );
}
