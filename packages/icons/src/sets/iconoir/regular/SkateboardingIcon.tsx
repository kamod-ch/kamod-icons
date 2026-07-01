import type { IconProps } from "../../../shared/types";

export function SkateboardingIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m5 19 2.333 1h9.334L19 19M8 22.01l.01-.011m7.99.011.01-.011M7 7.834l3-1.5c2-1 4.27.567 4.27.567l-4.308 3.135L14 13.334v4m-4.451-3.989-1.24.827H5M15.165 9.21h2.722M17 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
    </svg>
  );
}
