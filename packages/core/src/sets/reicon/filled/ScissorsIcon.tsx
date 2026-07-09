import type { IconProps } from "../../../shared/types";

export function ScissorsIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M6.654 1.633a.75.75 0 0 0-1.308.735l5.794 10.304-2.708 4.815a3.751 3.751 0 1 0-.136 3.303L12 14.202l3.704 6.588a3.75 3.75 0 1 0-.136-3.303l-2.708-4.815 5.794-10.304a.75.75 0 0 0-1.308-.735L12 11.142z"/>
    </svg>
  );
}
