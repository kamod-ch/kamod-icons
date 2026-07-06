import type { IconProps } from "../../../shared/types";

export function MoodWink2Icon({
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
      <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18M9 10h-.01"/><path d="M14.5 15a3.5 3.5 0 0 1-5 0m6-6.5L14 10l1.5 1.5"/>
    </svg>
  );
}
