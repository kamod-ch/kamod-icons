import type { IconProps } from "../../shared/types";

export function ToastStackIcon({
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
      <path d="M2 14.5A2.5 2.5 0 0 1 4.5 12h11a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5m4-8A2.5 2.5 0 0 1 8.5 4h11A2.5 2.5 0 0 1 22 6.5 2.5 2.5 0 0 1 19.5 9h-11A2.5 2.5 0 0 1 6 6.5"/>
    </svg>
  );
}
