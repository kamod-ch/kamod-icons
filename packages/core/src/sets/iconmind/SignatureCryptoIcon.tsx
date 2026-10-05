import type { IconProps } from "../../shared/types";

export function SignatureCryptoIcon({
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
      <path d="M3 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0m2-2 4 4m2-2h10m-6 0v3m4-3v4"/>
    </svg>
  );
}
