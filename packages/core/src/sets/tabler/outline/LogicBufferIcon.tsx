import type { IconProps } from "../../../shared/types";

export function LogicBufferIcon({
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
      <path d="M22 12h-5M2 9h5m-5 6h5M7 5l10 7-10 7z"/>
    </svg>
  );
}
