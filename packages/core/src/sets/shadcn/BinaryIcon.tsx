import type { IconProps } from "../../shared/types";

export function BinaryIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 20h4m4-10h4M6 14h2v6m6-16h2v6m-6-6H6v6h4zm8 10h-4v6h4z"/>
    </svg>
  );
}
