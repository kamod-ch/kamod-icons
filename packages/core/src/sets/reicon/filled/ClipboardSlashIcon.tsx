import type { IconProps } from "../../../shared/types";

export function ClipboardSlashIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M6.312 22.597c.224.043.452.07.688.07h10A3.67 3.67 0 0 0 20.667 19V8.243zM20.16 4.507A3.65 3.65 0 0 0 17 2.667h-.367a2.33 2.33 0 0 0-2.3-2H9.667a2.33 2.33 0 0 0-2.3 2H7a3.67 3.67 0 0 0-3.667 3.666V19c0 .668.194 1.287.507 1.827zM9.333 3c0-.184.15-.333.334-.333h4.666c.184 0 .334.149.334.333v1.333c0 .184-.15.334-.334.334H9.667a.333.333 0 0 1-.334-.334z"/><path d="M3 22.667a1 1 0 0 1-.707-1.708L20.627 2.627A1 1 0 1 1 22.04 4.04L3.707 22.373a1 1 0 0 1-.707.294Z"/></g>
    </svg>
  );
}
