import type { IconProps } from "../../../shared/types";

export function LoaderQuarterIcon({
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
      <path d="M12 6V3m-6 9H3m4.75-4.25L5.6 5.6"/>
    </svg>
  );
}
