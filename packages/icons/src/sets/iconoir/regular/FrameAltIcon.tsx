import type { IconProps } from "../../../shared/types";

export function FrameAltIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 3v18M18 3v18M3 6h18"/><path fill="currentColor" fillRule="evenodd" d="M9.6 9h4.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6H9.6a.6.6 0 0 1-.6-.6V9.6a.6.6 0 0 1 .6-.6" clipRule="evenodd"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 18h18"/>
    </svg>
  );
}
