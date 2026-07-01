import type { IconProps } from "../../../shared/types";

export function StepOutIcon({
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
      <path d="M12 3v12m4-8-4-4M8 7l4-4m-1 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
