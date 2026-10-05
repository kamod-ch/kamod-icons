import type { IconProps } from "../../shared/types";

export function VlanIcon({
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
      <path d="M2 12h20M3 6.5A2.5 2.5 0 0 1 5.5 4h3A2.5 2.5 0 0 1 11 6.5 2.5 2.5 0 0 1 8.5 9h-3A2.5 2.5 0 0 1 3 6.5m10 0A2.5 2.5 0 0 1 15.5 4h3A2.5 2.5 0 0 1 21 6.5 2.5 2.5 0 0 1 18.5 9h-3A2.5 2.5 0 0 1 13 6.5m-10 11A2.5 2.5 0 0 1 5.5 15h3a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 8.5 20h-3A2.5 2.5 0 0 1 3 17.5m10 0a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5h-3a2.5 2.5 0 0 1-2.5-2.5"/>
    </svg>
  );
}
