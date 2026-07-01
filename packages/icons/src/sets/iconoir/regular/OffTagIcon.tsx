import type { IconProps } from "../../../shared/types";

export function OffTagIcon({
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
      <path stroke="currentColor" strokeWidth="1.5" d="M1 15V9a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6Z"/><path stroke="currentColor" strokeWidth="1.5" d="M7 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 15V9h3m2 6V9h3m-8 3h2.572M17 12h2.572"/>
    </svg>
  );
}
