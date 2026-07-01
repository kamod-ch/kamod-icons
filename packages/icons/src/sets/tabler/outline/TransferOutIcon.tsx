import type { IconProps } from "../../../shared/types";

export function TransferOutIcon({
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
      <path d="M4 19v2h16V7l-8-4-8 4v2m9 5H4"/><path d="m7 11-3 3 3 3"/>
    </svg>
  );
}
