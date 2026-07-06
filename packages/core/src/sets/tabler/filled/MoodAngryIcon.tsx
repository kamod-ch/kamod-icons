import type { IconProps } from "../../../shared/types";

export function MoodAngryIcon({
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a10 10 0 1 1 0-20m0 12a4.5 4.5 0 0 0-3.214 1.35 1 1 0 1 0 1.428 1.4 2.5 2.5 0 0 1 3.572 0 1 1 0 0 0 1.428-1.4A4.5 4.5 0 0 0 12 14M8.447 8.105a1 1 0 0 0-.894 1.788l2 1a1 1 0 0 0 .894-1.788zm8.447.447a1 1 0 0 0-1.341-.447l-2 1a1 1 0 0 0 .894 1.788l2-1a1 1 0 0 0 .447-1.341"/>
    </svg>
  );
}
