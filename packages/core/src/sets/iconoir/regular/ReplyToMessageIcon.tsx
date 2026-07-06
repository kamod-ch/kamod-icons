import type { IconProps } from "../../../shared/types";

export function ReplyToMessageIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 8 5 3 5-3"/><path stroke="currentColor" strokeLinecap="round" d="M10 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6.857"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13 17.111h6.3c3.6 0 3.6 4.889 0 4.889M13 17.111 16.15 14M13 17.111l3.15 3.111"/>
    </svg>
  );
}
