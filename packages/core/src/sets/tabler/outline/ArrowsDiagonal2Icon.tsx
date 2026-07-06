import type { IconProps } from "../../../shared/types";

export function ArrowsDiagonal2Icon({
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
      <path d="M16 20h4v-4m-6-2 6 6M8 4H4v4m0-4 6 6"/>
    </svg>
  );
}
