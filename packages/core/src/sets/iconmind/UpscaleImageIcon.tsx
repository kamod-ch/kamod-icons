import type { IconProps } from "../../shared/types";

export function UpscaleImageIcon({
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
      <path d="M14 4h4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4"/><path d="M6 12.5a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V15a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Zm7-1.5 4-4m-2.5 0H17v2.5"/>
    </svg>
  );
}
