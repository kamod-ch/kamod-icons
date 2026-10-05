import type { IconProps } from "../../shared/types";

export function MailAddIcon({
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
      <path d="M3 11.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm2-2 7-7 7 7m-7 3v6m-3-3h6"/>
    </svg>
  );
}
