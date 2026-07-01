import type { IconProps } from "../../../shared/types";

export function DotsVerticalIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M14 12a2 2 0 1 1-4 0q0-.053.005-.102A1.996 1.996 0 0 1 12 10a2 2 0 0 1 2 2m0 7a2 2 0 1 1-4 0q0-.052.005-.102A1.996 1.996 0 0 1 12 17a2 2 0 0 1 2 2m0-14a2 2 0 1 1-4 0q0-.053.005-.102A1.996 1.996 0 0 1 12 3a2 2 0 0 1 2 2"/>
    </svg>
  );
}
