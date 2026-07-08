import type { IconProps } from "../../../shared/types";

export function BitcoinIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M10 2a1 1 0 0 0-2 0v1.5H5.5a1 1 0 0 0 0 2h1v13h-1a1 1 0 1 0 0 2H8V22a1 1 0 0 0 2 0v-1.5h2V22a1 1 0 0 0 2 0v-1.5h.75a4.75 4.75 0 0 0 2.014-9.053A4.751 4.751 0 0 0 14 3.559V2a1 1 0 1 0-2 0v1.5h-2zM8.5 5.5V11h4.77a2.75 2.75 0 0 0-.02-5.5zm4.504 13h1.746a2.75 2.75 0 0 0 0-5.5H8.5v5.5z" clipRule="evenodd"/>
    </svg>
  );
}
