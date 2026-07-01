import type { IconProps } from "../../shared/types";

export function UtilityPoleIcon({
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
      <path d="M12 2v20M2 5h20M3 3v2m4-2v2m10-2v2m4-2v2m-2 0-7 7-7-7"/>
    </svg>
  );
}
