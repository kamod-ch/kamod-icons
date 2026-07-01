import type { IconProps } from "../../shared/types";

export function PizzaIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11h.01M11 15h.01M16 16h.01M2 16l20 6-6-20c-3.36.9-6.42 2.67-8.88 5.12A19.9 19.9 0 0 0 2 16"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 6c-6.29 1.47-9.43 5.13-11 11"/>
    </svg>
  );
}
