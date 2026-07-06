import type { IconProps } from "../../../shared/types";

export function BoxAlignRightIcon({
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
      <path d="M18.998 3.003h-5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h5a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2m-9.99 16a1 1 0 0 1 .117 1.993l-.127.007a1 1 0 0 1-.117-1.993zm-5 0a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zm0-5.001a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zm0-6a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zm0-5a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zm5 0a1 1 0 0 1 .117 1.993l-.127.007a1 1 0 0 1-.117-1.993z"/>
    </svg>
  );
}
