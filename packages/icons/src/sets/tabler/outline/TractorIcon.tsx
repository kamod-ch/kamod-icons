import type { IconProps } from "../../../shared/types";

export function TractorIcon({
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
      <path d="M3 15a4 4 0 1 0 8 0 4 4 0 1 0-8 0m4 0v.01M17 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-6.5 0H17"/><path d="M20 15.2V11a1 1 0 0 0-1-1h-6l-2-5H5v6.5"/><path d="M18 5h-1a1 1 0 0 0-1 1v4"/>
    </svg>
  );
}
