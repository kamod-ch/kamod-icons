import type { IconProps } from "../../shared/types";

export function VramFullIcon({
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
      <path d="M14 11h5a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3l3-3h5m-3 3v3m5-3v3m5-3v3M12 2v2.5m-1 3a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
