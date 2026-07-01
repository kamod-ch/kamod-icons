import type { IconProps } from "../../../shared/types";

export function DragIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M3.25 4A.75.75 0 0 1 4 3.25h4a.75.75 0 0 1 .53 1.28L7.06 6l5.47 5.47a.75.75 0 1 1-1.06 1.06L6 7.06 4.53 8.53A.75.75 0 0 1 3.25 8z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M3.25 20c0 .414.336.75.75.75h4a.75.75 0 0 0 .53-1.28L7.06 18l5.47-5.47a.75.75 0 1 0-1.06-1.06L6 16.94l-1.47-1.47a.75.75 0 0 0-1.28.53z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M20.75 4a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.53 1.28L16.94 6l-5.47 5.47a.75.75 0 1 0 1.06 1.06L18 7.06l1.47 1.47A.75.75 0 0 0 20.75 8z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M20.75 20a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.53-1.28L16.94 18l-5.47-5.47a.75.75 0 1 1 1.06-1.06L18 16.94l1.47-1.47a.75.75 0 0 1 1.28.53z" clipRule="evenodd"/>
    </svg>
  );
}
