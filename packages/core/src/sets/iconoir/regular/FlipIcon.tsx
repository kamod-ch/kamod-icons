import type { IconProps } from "../../../shared/types";

export function FlipIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 20H2L9.5 4zm10.625 0H22l-.937-2m-4.688 2H14.5v-2m0-6v2m3.75-2 .938 2m-2.813-6L14.5 4v4"/>
    </svg>
  );
}
