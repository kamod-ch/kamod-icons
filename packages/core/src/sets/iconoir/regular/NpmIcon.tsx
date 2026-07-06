import type { IconProps } from "../../../shared/types";

export function NpmIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1 8h22v7H11v2H7.5v-2H1zm6.5 0v7m6-7v7"/><path stroke="currentColor" strokeLinecap="round" d="M18 11v4M5 11v4m6-4v1m9.5-1v4"/>
    </svg>
  );
}
