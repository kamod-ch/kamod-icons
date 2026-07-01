import type { IconProps } from "../../../shared/types";

export function ArrowLeftFromArcIcon({
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
      <path d="M9 12h12m-4 4 4-4-4-4m-5-5a9 9 0 1 0 0 18"/>
    </svg>
  );
}
