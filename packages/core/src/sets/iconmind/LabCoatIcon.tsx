import type { IconProps } from "../../shared/types";

export function LabCoatIcon({
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
      <path d="M6 21V7l3-3h6l3 3v14Z"/><path d="m7 4 5 5 5-5m-5 5v12"/>
    </svg>
  );
}
