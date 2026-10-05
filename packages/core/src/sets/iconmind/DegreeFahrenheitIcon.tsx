import type { IconProps } from "../../shared/types";

export function DegreeFahrenheitIcon({
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
      <path d="M4 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0m9 1v12m0-12h7m-7 6h5"/>
    </svg>
  );
}
