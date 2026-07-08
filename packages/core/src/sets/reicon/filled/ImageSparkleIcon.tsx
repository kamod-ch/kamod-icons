import type { IconProps } from "../../../shared/types";

export function ImageSparkleIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M17.925 12.075c-1.384-1.386-3.801-1.386-5.185 0l-7.836 7.837c.413.264.903.421 1.43.421h11.333a2.667 2.667 0 0 0 2.666-2.666V14.48l-2.408-2.408ZM12.21 8.677l-1.683-.561-.562-1.684c-.182-.544-1.082-.544-1.265 0l-.561 1.684-1.684.561a.667.667 0 0 0 0 1.264l1.684.562.561 1.684a.668.668 0 0 0 1.267 0l.561-1.684 1.684-.562a.667.667 0 0 0 0-1.264Z"/><path d="M17.667 21.333H6.333a3.67 3.67 0 0 1-3.666-3.666V6.333a3.67 3.67 0 0 1 3.666-3.666h11.334a3.67 3.67 0 0 1 3.666 3.666v11.334a3.67 3.67 0 0 1-3.666 3.666ZM6.333 4.667c-.918 0-1.666.748-1.666 1.666v11.334c0 .918.748 1.666 1.666 1.666h11.334c.918 0 1.666-.748 1.666-1.666V6.333c0-.918-.748-1.666-1.666-1.666z"/></g>
    </svg>
  );
}
