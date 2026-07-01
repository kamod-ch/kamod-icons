import type { IconProps } from "../../shared/types";

export function HardDriveDownloadIcon({
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
      <path d="M12 2v8m4-4-4 4-4-4"/><rect x="2" y="14" rx="2"/><path d="M6 18h.01M10 18h.01"/>
    </svg>
  );
}
