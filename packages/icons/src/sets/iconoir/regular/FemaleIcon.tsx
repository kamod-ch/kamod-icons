import type { IconProps } from "../../../shared/types";

export function FemaleIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0 0v4m0 2v-2m0 0h-2m2 0h2"/>
    </svg>
  );
}
