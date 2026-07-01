import type { IconProps } from "../../../shared/types";

export function HttpPatchOffIcon({
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
      <path d="M3 12h2a2 2 0 1 0 0-4H3v8m7 0v-6m2-2a2 2 0 0 1 2 2m0 4v2m-4-3h3m4-5h4m-2 0v7M3 3l18 18"/>
    </svg>
  );
}
