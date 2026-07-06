import type { IconProps } from "../../../shared/types";

export function FolderSettingsIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.6 4h6.178a.6.6 0 0 1 .39.144l3.164 2.712a.6.6 0 0 0 .39.144H21.4a.6.6 0 0 1 .6.6v2.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6V4.6a.6.6 0 0 1 .6-.6M22 10v4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 10v9.4a.6.6 0 0 0 .6.6H13m6 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/><path stroke="currentColor" strokeDasharray="0.3 2" strokeLinecap="round" strokeLinejoin="round" d="M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
    </svg>
  );
}
