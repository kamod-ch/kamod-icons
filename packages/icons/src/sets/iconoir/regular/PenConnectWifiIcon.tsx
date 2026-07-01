import type { IconProps } from "../../../shared/types";

export function PenConnectWifiIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m8 9.76.01-.011M3 6.25c2.5-3 7.5-3 10 0m-8 2c1.5-2 4.5-2 6 0m6.5-1.75 1-1a2.12 2.12 0 0 1 3 0v0a2.12 2.12 0 0 1 0 3l-1 1m-3-3L6.696 17.304a1 1 0 0 0-.263.465L5.5 21.5l3.731-.933a1 1 0 0 0 .465-.263L20.5 9.5m-3-3 3 3"/>
    </svg>
  );
}
