import type { IconProps } from "../../../shared/types";

export function FacialRecognitionIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M10.667 14a1 1 0 0 1 0-2c.184 0 .333-.15.333-.333V8.333a1 1 0 0 1 2 0v3.334A2.336 2.336 0 0 1 10.667 14Zm-3-3a1 1 0 0 1-1-1V8.333a1 1 0 0 1 2 0V10a1 1 0 0 1-1 1Zm8.666 0a1 1 0 0 1-1-1V8.333a1 1 0 0 1 2 0V10a1 1 0 0 1-1 1ZM12 18a5.95 5.95 0 0 1-3.6-1.2 1 1 0 1 1 1.201-1.599c1.394 1.046 3.407 1.046 4.8 0a1 1 0 1 1 1.202 1.599 5.94 5.94 0 0 1-3.6 1.2Zm-8.333-8a1 1 0 0 1-1-1V6.333a3.67 3.67 0 0 1 3.666-3.666H9a1 1 0 0 1 0 2H6.333c-.918 0-1.666.748-1.666 1.666V9a1 1 0 0 1-1 1Zm16.666 0a1 1 0 0 1-1-1V6.333c0-.918-.748-1.666-1.666-1.666H15a1 1 0 0 1 0-2h2.667a3.67 3.67 0 0 1 3.666 3.666V9a1 1 0 0 1-1 1Zm-2.666 11.333H15a1 1 0 0 1 0-2h2.667c.918 0 1.666-.748 1.666-1.666V15a1 1 0 0 1 2 0v2.667a3.67 3.67 0 0 1-3.666 3.666Zm-8.667 0H6.333a3.67 3.67 0 0 1-3.666-3.666V15a1 1 0 0 1 2 0v2.667c0 .918.748 1.666 1.666 1.666H9a1 1 0 0 1 0 2Z"/>
    </svg>
  );
}
