import type { IconProps } from "../../shared/types";

export function FreeParkingIcon({
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
      <path d="M8 2v11M8 2h4l3.5 3.5V8L12 11.5H8M3 21v-3h3.5L9 15.5h6l2.5 2.5H21v3Z"/>
    </svg>
  );
}
