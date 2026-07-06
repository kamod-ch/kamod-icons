import type { IconProps } from "../../../shared/types";

export function MailCancelIcon({
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
      <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5m-5 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0m1 2 4-4"/><path d="m3 7 9 6 9-6"/>
    </svg>
  );
}
