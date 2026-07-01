import type { IconProps } from "../../../shared/types";

export function BrandRedditIcon({
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
      <path d="M12 8c2.648 0 5.028.826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59-4.03 6.5-9 6.5-4.875 0-8.845-2.8-9-6.294l-1-.206a2.5 2.5 0 0 1 2.326-4.36C5.973 8.827 8.353 8 11.001 8zm0 0 1-5 6 1"/><path d="M18 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/><path fill="currentColor" d="M8.5 13a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0m6 0a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0"/><path d="M10 17q1 .5 2 .5c1 0 1.333-.167 2-.5"/>
    </svg>
  );
}
