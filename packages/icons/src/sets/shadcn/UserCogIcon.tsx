import type { IconProps } from "../../shared/types";

export function UserCogIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8m10 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-5v1m0 4v1m2.6-4.5-.87.5m-3.46 2-.87.5m5.2 0-.87-.5m-3.46-2-.87-.5"/>
    </svg>
  );
}
