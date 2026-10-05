import type { IconProps } from "../../shared/types";

export function MinifyIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm8 8v3m-2-1 2 2 2-2m-6 6.25a1.75 1.75 0 0 1 1.75-1.75h4.5A1.75 1.75 0 0 1 16 20.25 1.75 1.75 0 0 1 14.25 22h-4.5A1.75 1.75 0 0 1 8 20.25"/>
    </svg>
  );
}
