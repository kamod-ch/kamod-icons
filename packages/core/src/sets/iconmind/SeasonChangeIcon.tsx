import type { IconProps } from "../../shared/types";

export function SeasonChangeIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M2 16c0-4.8 3.2-8 8-8 0 4.8-3.2 8-8 8m16-8v8m-4 0 8-8m-11.5 4h3M12 9.5l2.5 2.5-2.5 2.5"/>
    </svg>
  );
}
