import type { IconProps } from "../../shared/types";

export function CourseCertificateIcon({
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
      <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm4 2h12M6 10h8"/><path d="M14 15a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M15 17v4l2-2 2 2v-4"/>
    </svg>
  );
}
