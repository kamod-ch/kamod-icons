import type { IconProps } from "../../shared/types";

export function FactoryDataIcon({
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
      <path d="M4 15v4h16v-4M6 9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Zm10-5.5V7"/>
    </svg>
  );
}
