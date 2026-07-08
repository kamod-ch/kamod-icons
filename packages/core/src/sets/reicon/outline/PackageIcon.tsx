import type { IconProps } from "../../../shared/types";

export function PackageIcon({
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
      <path fill="currentColor" d="M6 16.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"/><path fill="currentColor" fillRule="evenodd" d="M7.045 1.25h9.91a3.25 3.25 0 0 1 2.907 1.797l2.65 5.3c.157.313.238.658.238 1.007V19A3.75 3.75 0 0 1 19 22.75H5A3.75 3.75 0 0 1 1.25 19V9.354c0-.35.081-.694.238-1.006l2.65-5.301A3.25 3.25 0 0 1 7.045 1.25ZM5.48 3.717a1.75 1.75 0 0 1 1.565-.967h4.205v5.5H3.214zm7.27 4.533v-5.5h4.205a1.75 1.75 0 0 1 1.565.967l2.267 4.533zm-10 1.5h18.5V19A2.25 2.25 0 0 1 19 21.25H5A2.25 2.25 0 0 1 2.75 19z" clipRule="evenodd"/>
    </svg>
  );
}
