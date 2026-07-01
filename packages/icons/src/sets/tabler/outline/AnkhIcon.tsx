import type { IconProps } from "../../../shared/types";

export function AnkhIcon({
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
      <path d="M6 13h12m-6 8v-8l-.422-.211A6.47 6.47 0 0 1 8 7a4 4 0 1 1 8 0 6.47 6.47 0 0 1-3.578 5.789L12 13"/>
    </svg>
  );
}
