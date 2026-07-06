import type { IconProps } from "../../../shared/types";

export function ChessQueenIcon({
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
      <path d="m16 16 2-11-4 4-2-5-2 5-4-4 2 11m0 0-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16z"/><path d="M11 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M5 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m12 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
