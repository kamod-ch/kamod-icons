import type { IconProps } from "../../../shared/types";

export function GoogleDriveIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.143 3.004 14.857 3m-5.714.004L2 15.004m7.143-12L18.433 21M14.856 3 22 15.004M14.857 3 5.575 21m12.857 0H5.575m12.857 0L22 15.004M5.575 21 2 15.004m20 0H2"/>
    </svg>
  );
}
