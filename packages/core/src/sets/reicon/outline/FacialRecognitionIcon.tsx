import type { IconProps } from "../../../shared/types";

export function FacialRecognitionIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8.333v3.334c0 .736-.597 1.333-1.333 1.333m-3-4.667V10m8.666-1.667V10M15 16c-.836.628-1.875 1-3 1s-2.165-.372-3-1M3.667 9V6.333a2.666 2.666 0 0 1 2.666-2.666H9m6 0h2.667a2.666 2.666 0 0 1 2.666 2.666V9m0 6v2.667a2.666 2.666 0 0 1-2.666 2.666H15m-6 0H6.333a2.666 2.666 0 0 1-2.666-2.666V15"/>
    </svg>
  );
}
