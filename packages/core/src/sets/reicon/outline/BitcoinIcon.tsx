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
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" fillRule="evenodd" d="M9 1.25a.75.75 0 0 1 .75.75v1.75h2.5V2a.75.75 0 0 1 1.5 0v1.777a4.5 4.5 0 0 1 2.577 7.757 4.502 4.502 0 0 1-1.577 8.716h-1V22a.75.75 0 0 1-1.5 0v-1.75h-2.5V22a.75.75 0 0 1-1.5 0v-1.75H5.5a.75.75 0 0 1 0-1.5h1.25V5.25H5.5a.75.75 0 0 1 0-1.5h2.75V2A.75.75 0 0 1 9 1.25Zm-.75 4v6h5.022a3 3 0 0 0-.022-6zm5 7.5h1.5a3 3 0 0 1 0 6h-6.5v-6z" clipRule="evenodd"/>
    </svg>
  );
}
