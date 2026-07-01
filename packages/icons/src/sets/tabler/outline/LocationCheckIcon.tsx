import type { IconProps } from "../../../shared/types";

export function LocationCheckIcon({
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
      <path d="M11.512 17.023 10 14l-7-3.5a.55.55 0 0 1 0-1L21 3l-4.45 12.324M15 19l2 2 4-4"/>
    </svg>
  );
}
