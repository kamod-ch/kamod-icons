import type { IconProps } from "../../../shared/types";

export function Microphone2Icon({
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
      <path d="M15 12.9A5 5 0 1 0 11.098 9M15 12.9l-3.902-3.899-7.513 8.584a2 2 0 1 0 2.827 2.83z"/>
    </svg>
  );
}
