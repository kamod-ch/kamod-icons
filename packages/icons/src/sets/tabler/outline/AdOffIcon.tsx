import type { IconProps } from "../../../shared/types";

export function AdOffIcon({
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
      <path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"/><path d="M7 15v-4a2 2 0 0 1 2-2m2 2v4m-4-2h4m6-4v4m-.885-.869c.33.149.595.412.747.74M3 3l18 18"/>
    </svg>
  );
}
