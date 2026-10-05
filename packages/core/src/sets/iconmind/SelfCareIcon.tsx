import type { IconProps } from "../../shared/types";

export function SelfCareIcon({
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
      <path d="M8 13h8v8H8Zm-2 3h12m-6-3V8m0 0c0-4-3-6-7-6 0 4 3 6 7 6m0 0c0-3 3-5 7-5 0 3-3 5-7 5"/>
    </svg>
  );
}
