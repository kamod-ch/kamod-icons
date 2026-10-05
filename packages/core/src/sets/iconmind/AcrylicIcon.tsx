import type { IconProps } from "../../shared/types";

export function AcrylicIcon({
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
      <path d="M6 20V8h12v12ZM6 8l3-3h6l3 3M6 11h12m-8-6V2h4v3"/>
    </svg>
  );
}
