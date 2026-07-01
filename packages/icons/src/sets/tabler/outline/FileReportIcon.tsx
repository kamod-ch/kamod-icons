import type { IconProps } from "../../../shared/types";

export function FileReportIcon({
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
      <path d="M13 17a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/><path d="M17 13v4h4M12 3v4a1 1 0 0 0 1 1h4"/><path d="M11.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v2m0 3v4"/>
    </svg>
  );
}
