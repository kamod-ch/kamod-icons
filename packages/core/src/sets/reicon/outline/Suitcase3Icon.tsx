import type { IconProps } from "../../../shared/types";

export function Suitcase3Icon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><path d="M1.75 8.75c1.421.616 3.966 1.503 7.25 1.503s5.829-.887 7.25-1.503M9 9.25v2.25M6.25 4.75v-2.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1v2.5"/><rect x="1.75" y="4.75" rx="2" ry="2"/></g>
    </svg>
  );
}
