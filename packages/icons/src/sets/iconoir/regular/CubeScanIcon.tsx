import type { IconProps } from "../../../shared/types";

export function CubeScanIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 3H3v3m15-3h3v3M6 21H3v-3m15 3h3v-3m-8.485-.309 4-2.4a1 1 0 0 0 .485-.857v-3.868a1 1 0 0 0-.485-.857l-4-2.4a1 1 0 0 0-1.03 0l-4 2.4a1 1 0 0 0-.485.857v3.868a1 1 0 0 0 .486.857l4 2.4a1 1 0 0 0 1.028 0"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.5 10.5 12 13m0 0s3.764-2.05 4.5-2.5M12 13v4.5"/>
    </svg>
  );
}
