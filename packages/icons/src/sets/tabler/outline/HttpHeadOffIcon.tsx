import type { IconProps } from "../../../shared/types";

export function HttpHeadOffIcon({
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
      <path d="M3 16V8m4 0v8m-4-4h4m7-4h-2m-2 2v6h4m-4-4h2m5 1v-3a2 2 0 1 1 4 0v6m-4-3h4M3 3l18 18"/>
    </svg>
  );
}
