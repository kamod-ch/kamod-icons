import type { IconProps } from "../../../shared/types";

export function RoundFlaskIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M7.25 4A.75.75 0 0 1 8 3.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 4" clipRule="evenodd"/><path fill="currentColor" d="M9 3.75a.75.75 0 0 1 .75.75v4.253c0 1.065-.617 1.96-1.41 2.493-1.132.762-2.108 1.802-2.755 3.008h12.83c-.647-1.206-1.623-2.246-2.755-3.008-.793-.533-1.41-1.428-1.41-2.493V4.5a.75.75 0 0 1 1.5 0v4.253c0 .461.273.93.747 1.249 2.363 1.588 4.253 4.308 4.253 7.46 0 .882-.123 1.736-.354 2.544-.325 1.136-1.402 1.744-2.447 1.744H6.051c-1.045 0-2.122-.608-2.447-1.744a9.3 9.3 0 0 1-.354-2.544c0-3.152 1.89-5.871 4.253-7.46.474-.319.747-.788.747-1.249V4.5A.75.75 0 0 1 9 3.75"/><path fill="currentColor" fillRule="evenodd" d="M13.512 6.442a.75.75 0 0 1 .056 1.059l-.01.01a.75.75 0 0 1-1.115-1.003l.01-.01a.75.75 0 0 1 1.059-.056m-2-5a.75.75 0 0 1 .056 1.059l-.01.01a.75.75 0 0 1-1.115-1.003l.01-.01a.75.75 0 0 1 1.059-.056" clipRule="evenodd"/>
    </svg>
  );
}
