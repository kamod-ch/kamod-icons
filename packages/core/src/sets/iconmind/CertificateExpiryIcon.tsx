import type { IconProps } from "../../shared/types";

export function CertificateExpiryIcon({
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
      <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm3 2h12M6 11h7m-1.5 7a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0m3.5-2.5V18m0 0h2.5"/>
    </svg>
  );
}
