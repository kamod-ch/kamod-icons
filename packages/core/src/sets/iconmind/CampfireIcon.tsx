import type { IconProps } from "../../shared/types";

export function CampfireIcon({
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
      <path d="M12 17c-4-2-5.5-6-3-10 1.5 2.5 3 2.5 3 1 0-2.5-1.5-4 0-6 3 2.5 5.5 5 5.5 9 0 3.5-2.5 5-5.5 6m-6 3h12"/>
    </svg>
  );
}
