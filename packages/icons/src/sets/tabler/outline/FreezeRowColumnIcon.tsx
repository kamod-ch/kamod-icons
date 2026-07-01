import type { IconProps } from "../../../shared/types";

export function FreezeRowColumnIcon({
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
      <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm12-2L3 15M9.5 3l-6 6M20 3.5 14.5 9M9 15l-5 5"/><path d="M21 9H9v12"/>
    </svg>
  );
}
