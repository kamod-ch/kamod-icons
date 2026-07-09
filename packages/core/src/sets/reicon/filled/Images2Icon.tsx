import type { IconProps } from "../../../shared/types";

export function Images2Icon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M10.667 9.333c-.735 0-1.334-.598-1.334-1.333s.599-1.333 1.334-1.333S12 7.265 12 8s-.599 1.333-1.333 1.333Zm7.649-.649c-.91-.91-2.39-.91-3.3 0l-7.307 7.304c.384.213.819.347 1.29.347h10a2.667 2.667 0 0 0 2.666-2.667v-1.633l-3.35-3.351Z"/><path d="M16.333 21.333H5a3.67 3.67 0 0 1-3.667-3.666V9a1 1 0 0 1 2 0v8.667c0 .918.748 1.666 1.667 1.666h11.333a1 1 0 0 1 0 2Z"/><path d="M19 17.333H9a3.67 3.67 0 0 1-3.667-3.666V6.333A3.67 3.67 0 0 1 9 2.667h10a3.67 3.67 0 0 1 3.667 3.666v7.334A3.67 3.67 0 0 1 19 17.333ZM9 4.667c-.919 0-1.667.748-1.667 1.666v7.334c0 .918.748 1.666 1.667 1.666h10c.919 0 1.667-.748 1.667-1.666V6.333c0-.918-.748-1.666-1.667-1.666z"/></g>
    </svg>
  );
}
