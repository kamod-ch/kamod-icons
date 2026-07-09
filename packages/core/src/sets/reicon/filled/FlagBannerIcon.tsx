import type { IconProps } from "../../../shared/types";

export function FlagBannerIcon({
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
      <path fill="currentColor" d="M4 1.25a.75.75 0 0 1 .75.75v1.25h14.744a1.25 1.25 0 0 1 1.065 1.906l-2.597 4.213a.25.25 0 0 0 0 .262l2.597 4.213a1.25 1.25 0 0 1-1.065 1.906H4.75V22a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 4 1.25Z"/>
    </svg>
  );
}
