import type { IconProps } from "../../../shared/types";

export function MoodAnnoyedIcon({
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
      <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18"/><path d="M15 14c-2 0-3 1-3.5 2.05M9 10h-.01M15 10h-.01"/>
    </svg>
  );
}
