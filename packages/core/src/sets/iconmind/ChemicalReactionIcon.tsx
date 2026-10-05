import type { IconProps } from "../../shared/types";

export function ChemicalReactionIcon({
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
      <path d="M2 6h8M3 6v11h6V6m5 0h8m-7 0v11h6V6m-11 6h4m-2-2 2 2-2 2"/>
    </svg>
  );
}
