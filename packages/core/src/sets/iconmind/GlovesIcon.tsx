import type { IconProps } from "../../shared/types";

export function GlovesIcon({
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
      <path d="M6 21V10a3 3 0 0 1 6 0v11Zm9 0v-8a2.5 2.5 0 0 1 5 0v8Zm-9-4h6m3 1h5"/>
    </svg>
  );
}
