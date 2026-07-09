import type { IconProps } from "../../../shared/types";

export function AwardCertificateIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M23.667 16c0-2.39-1.944-4.333-4.334-4.333S15 13.61 15 16c0 1.379.66 2.595 1.667 3.39v3.943a.667.667 0 0 0 1.138.472l1.528-1.528 1.528 1.528A.666.666 0 0 0 22 23.333V19.39c1.007-.794 1.667-2.01 1.667-3.389Zm-4.334-2.333c1.287 0 2.334 1.046 2.334 2.333s-1.047 2.333-2.334 2.333S17 17.287 17 16s1.047-2.333 2.333-2.333Z"/><path d="M14.667 20.255A6.26 6.26 0 0 1 13 16a6.34 6.34 0 0 1 6.333-6.333c.459 0 .903.054 1.334.146V5A3.67 3.67 0 0 0 17 1.333H5.667A3.67 3.67 0 0 0 2 5v14a3.67 3.67 0 0 0 3.667 3.667h9zM7 6.667h8a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm3.333 10.666H7a1 1 0 0 1 0-2h3.333a1 1 0 0 1 0 2Zm0-4.333H7a1 1 0 0 1 0-2h3.333a1 1 0 0 1 0 2Z"/></g>
    </svg>
  );
}
