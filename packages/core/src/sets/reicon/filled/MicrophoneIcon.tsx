import type { IconProps } from "../../../shared/types";

export function MicrophoneIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" strokeWidth="1.333"><path d="M12 16a5.34 5.34 0 0 0 5.333-5.333v-4c0-2.942-2.392-5.334-5.333-5.334S6.667 3.725 6.667 6.667v4A5.34 5.34 0 0 0 12 16Z"/><path d="M20.333 9.667a1 1 0 0 0-1 1C19.333 14.71 16.044 18 12 18s-7.333-3.29-7.333-7.333a1 1 0 0 0-2 0c0 4.808 3.656 8.777 8.333 9.277v1.723a1 1 0 0 0 2 0v-1.723c4.677-.501 8.333-4.47 8.333-9.277a1 1 0 0 0-1-1Z"/></g>
    </svg>
  );
}
