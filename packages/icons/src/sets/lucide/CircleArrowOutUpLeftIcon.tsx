import type { IconProps } from "../../shared/types";

export function CircleArrowOutUpLeftIcon({
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
      <path d="M2 8V2h6M2 2l10 10m0-10A10 10 0 1 1 2 12"/>
    </svg>
  );
}
