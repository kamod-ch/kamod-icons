import type { IconProps } from "../../../shared/types";

export function WebhookIcon({
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
      <path d="M4.876 13.61A4 4 0 1 0 11 17h6"/><path d="M15.066 20.502A4 4 0 1 0 17 13c-.706 0-1.424.179-2 .5L12 8"/><path d="M16 8a4 4 0 1 0-8 0c0 1.506.77 2.818 2 3.5L7 17"/>
    </svg>
  );
}
