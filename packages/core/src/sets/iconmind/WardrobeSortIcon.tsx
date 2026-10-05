import type { IconProps } from "../../shared/types";

export function WardrobeSortIcon({
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
      <path d="M12 4c1.5 0 1.5 2 0 2.5M6 13l6-6 6 6M6 13h12m-9 4 3 3 3-3"/>
    </svg>
  );
}
