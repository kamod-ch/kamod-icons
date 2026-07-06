import type { IconProps } from "../../../shared/types";

export function CirclePlus2Icon({
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
      <path d="M20.985 12.522a9 9 0 1 0-8.475 8.464M16 19h6m-3-3v6"/>
    </svg>
  );
}
