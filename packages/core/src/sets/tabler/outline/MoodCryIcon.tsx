import type { IconProps } from "../../../shared/types";

export function MoodCryIcon({
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
      <path d="M9 10h.01M15 10h.01M9.5 15.25a3.5 3.5 0 0 1 5 0m3.066 2.356a2 2 0 1 0 2.897.03L19 16z"/><path d="M20.865 13.517A9 9 0 0 0 21 12a9 9 0 1 0-9 9c.69 0 1.36-.076 2-.222"/>
    </svg>
  );
}
