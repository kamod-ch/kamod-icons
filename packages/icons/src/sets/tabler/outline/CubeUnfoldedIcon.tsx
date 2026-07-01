import type { IconProps } from "../../../shared/types";

export function CubeUnfoldedIcon({
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
      <path d="M2 15h10v5h5v-5h5v-5H12V5H7v5H2z"/><path d="M7 15v-5h5v5h5v-5"/>
    </svg>
  );
}
