import type { IconProps } from "../../../shared/types";

export function ArrowBarToDownDashedIcon({
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
      <path d="M12 14V4m0 10 4-4m-4 4-4-4M4 20h3m13 0h-3m-3.5 0h-3"/>
    </svg>
  );
}
