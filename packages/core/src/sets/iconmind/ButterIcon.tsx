import type { IconProps } from "../../shared/types";

export function ButterIcon({
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
      <path d="M6 7v6h12V7Zm4 0v6m-7 3h18c0 3-4 5-9 5s-9-2-9-5"/>
    </svg>
  );
}
