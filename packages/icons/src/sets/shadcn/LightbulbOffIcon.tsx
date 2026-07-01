import type { IconProps } from "../../shared/types";

export function LightbulbOffIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 18h6m-5 4h4M2 2l20 20M9 2.804A6 6 0 0 1 18 8a4.65 4.65 0 0 1-1.03 3m-8.06 3a4.6 4.6 0 0 0-1.41-2.5C6.23 10.23 6 9 6 8a6 6 0 0 1 .084-1"/>
    </svg>
  );
}
