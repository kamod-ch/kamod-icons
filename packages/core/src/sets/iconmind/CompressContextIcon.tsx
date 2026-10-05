import type { IconProps } from "../../shared/types";

export function CompressContextIcon({
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
      <path d="M8 6H5v12h3m8-12h3v12h-3M9.5 8.5 12 11l2.5-2.5m-5 7L12 13l2.5 2.5"/>
    </svg>
  );
}
