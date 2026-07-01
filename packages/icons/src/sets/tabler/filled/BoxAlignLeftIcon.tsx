import type { IconProps } from "../../../shared/types";

export function BoxAlignLeftIcon({
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
      <path d="M10.002 3.003h-5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1m5 16a1 1 0 0 1 .117 1.993l-.127.007a1 1 0 0 1-.117-1.993zm5.001 0a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zm0-5.001a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zm0-6a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zm0-5a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zm-5.001 0a1 1 0 0 1 .117 1.993l-.127.007a1 1 0 0 1-.117-1.993z"/>
    </svg>
  );
}
