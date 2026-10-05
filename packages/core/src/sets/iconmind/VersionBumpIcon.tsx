import type { IconProps } from "../../shared/types";

export function VersionBumpIcon({
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
      <path d="M2 12a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm11-6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2Zm3.5 2v7"/><path d="m14.5 10 2-2 2 2"/>
    </svg>
  );
}
