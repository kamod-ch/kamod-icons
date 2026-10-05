import type { IconProps } from "../../shared/types";

export function VolunteeringIcon({
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
      <path d="M12 12c-2.5-2-6-4.5-4.5-7 1-1.5 3-1 4.5 1 1.5-2 3.5-2.5 4.5-1 1.5 2.5-2 5-4.5 7m-8 9v-4c0-2 2-3 4-3h8c2 0 4 1 4 3v4"/>
    </svg>
  );
}
