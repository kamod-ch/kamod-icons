import type { IconProps } from "../../shared/types";

export function DiamondIcon({
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
      <g clipPath="url(#a)"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21.299 10.299-7.595-7.595a2.41 2.41 0 0 0-3.408 0L2.702 10.3a2.41 2.41 0 0 0 0 3.408l7.594 7.594a2.41 2.41 0 0 0 3.408 0l7.595-7.594a2.41 2.41 0 0 0 0-3.408"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}
