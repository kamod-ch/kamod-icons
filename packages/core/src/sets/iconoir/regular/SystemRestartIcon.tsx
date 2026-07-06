import type { IconProps } from "../../../shared/types";

export function SystemRestartIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 12v4m10-10h-4M6 12H2m2.929-7.071 2.828 2.828m8.486 8.486 2.828 2.828m0-14.142-2.828 2.828m-8.486 8.486L4.93 19.07"/>
    </svg>
  );
}
