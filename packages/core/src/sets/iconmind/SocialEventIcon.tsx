import type { IconProps } from "../../shared/types";

export function SocialEventIcon({
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
      <path d="m4 10 8-8 8 8M6 10v10h12V10"/><path d="M6 10c1 2 3 2 4 0 1 2 3 2 4 0 1 2 3 2 4 0"/>
    </svg>
  );
}
