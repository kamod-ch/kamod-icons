import type { IconProps } from "../../../shared/types";

export function CropRotateTlIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 4H7a4 4 0 0 0-4 4v4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.5 1.5 10 4 7.5 6.5M20 17v-6a1 1 0 0 0-1-1h-6m-5 0h2m10 12v-2M10 8v11a1 1 0 0 0 1 1h11"/>
    </svg>
  );
}
