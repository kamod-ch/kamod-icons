import type { IconProps } from "../../../shared/types";

export function DirectDown2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.17 19.29 3.07 7.7C1.62 4.95 4.55 1.96 7.33 3.35l3.24 1.62c.9.45 1.96.45 2.86 0l3.24-1.62c2.78-1.39 5.7 1.6 4.26 4.35l-6.1 11.59c-1.2 2.28-4.46 2.28-5.66 0"/>
    </svg>
  );
}
