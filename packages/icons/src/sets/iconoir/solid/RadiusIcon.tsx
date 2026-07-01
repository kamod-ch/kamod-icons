import type { IconProps } from "../../../shared/types";

export function RadiusIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" fillRule="evenodd" d="M22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12 6.063 22.75 12 22.75 22.75 17.937 22.75 12m-7.28 3.53a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72h-3.608a1.75 1.75 0 1 0 0 1.5h3.607l-1.72 1.72a.75.75 0 0 0 0 1.06" clipRule="evenodd"/>
    </svg>
  );
}
