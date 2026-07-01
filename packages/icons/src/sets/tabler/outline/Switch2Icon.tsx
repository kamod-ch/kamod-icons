import type { IconProps } from "../../../shared/types";

export function Switch2Icon({
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
      <path d="M3 17h5l1.67-2.386m3.66-5.227L15 7h6"/><path d="m18 4 3 3-3 3M3 7h5l7 10h6"/><path d="m18 20 3-3-3-3"/>
    </svg>
  );
}
