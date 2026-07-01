import type { IconProps } from "../../../shared/types";

export function CirclesRelationIcon({
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
      <path d="M9.183 6.117a6 6 0 1 0 4.511 3.986"/><path d="M14.813 17.883a6 6 0 1 0-4.496-3.954"/>
    </svg>
  );
}
