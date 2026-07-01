import type { IconProps } from "../../../shared/types";

export function SunHighIcon({
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
      <path d="M14.828 14.828a4 4 0 1 0-5.656-5.656 4 4 0 0 0 5.656 5.656m-8.485 2.829-1.414 1.414M6.343 6.343 4.929 4.929m12.728 1.414 1.414-1.414m-1.414 12.728 1.414 1.414M4 12H2m10-8V2m8 10h2m-10 8v2"/>
    </svg>
  );
}
