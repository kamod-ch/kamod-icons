import type { IconProps } from "../../shared/types";

export function OcrIngestIcon({
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
      <path d="M3 7V4h3m5 0h3v3M3 17v3h3m5 0h3v-3m-8-5h5m6-2 2 2-2 2"/>
    </svg>
  );
}
