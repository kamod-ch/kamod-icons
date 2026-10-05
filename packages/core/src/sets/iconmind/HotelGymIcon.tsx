import type { IconProps } from "../../shared/types";

export function HotelGymIcon({
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
      <path d="M8 12h8M5 7v10h3V7Zm11 0v10h3V7ZM2.5 10v4m19-4v4"/>
    </svg>
  );
}
