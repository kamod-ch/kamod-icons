import type { IconProps } from "../../shared/types";

export function AlignCenterVerticalIcon({
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
      <path d="M12 3v2.5m0 13V21M8 7h8v4H8Zm1.5 7h5v4h-5Z"/>
    </svg>
  );
}
