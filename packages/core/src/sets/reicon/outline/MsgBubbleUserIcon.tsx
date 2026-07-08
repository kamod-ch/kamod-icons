import type { IconProps } from "../../../shared/types";

export function MsgBubbleUserIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><path d="M13.25 1.25a4 4 0 0 0-4 4c0 .728.197 1.408.537 1.996.237.445-.029 1.496-.537 2.004.69.037 1.598-.274 2.004-.537a4 4 0 0 0 1.996.537 4 4 0 0 0 0-8"/><circle cx="4.551" cy="8.75" r="2"/><path d="M.75 16a4.002 4.002 0 0 1 7.602 0"/></g>
    </svg>
  );
}
