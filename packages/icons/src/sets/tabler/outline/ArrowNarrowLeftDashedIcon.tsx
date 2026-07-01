import type { IconProps } from "../../../shared/types";

export function ArrowNarrowLeftDashedIcon({
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
      <path d="M5 12h6m3 0h1.5m3 0h.5M5 12l4 4m-4-4 4-4"/>
    </svg>
  );
}
