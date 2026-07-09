import type { IconProps } from "../../../shared/types";

export function HeartHandIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M14.007 12.887c2.393-.623 6.13-.753 7.449.255.865.66 1.377 1.971 1.525 4.155.376 5.539-1.541 5.707-5.055 5.707h-3.919c-2.617 0-4.333-1.19-6.332-2.212-.928-.476-1.434-1.56-1.082-2.543A1.906 1.906 0 0 1 9.045 17.1l2.647.972-3.22-7.014a2.142 2.142 0 1 1 3.896-1.78z"/><path d="M15.99 5.723q.01-.185.01-.373v-.023c.002-2.554-2.076-4.646-4.639-4.662h-.018a4.7 4.7 0 0 0-3.01 1.142A4.7 4.7 0 0 0 5.324.665h-.019C2.743.681.665 2.773.667 5.327v.023q0 .187.01.37c.244 4.938 5.2 7.903 6.744 8.71q.227.114.472.162l-1.24-2.699a4.142 4.142 0 1 1 7.536-3.441l.531 1.17c.7-1.12 1.196-2.42 1.27-3.899Z"/></g>
    </svg>
  );
}
