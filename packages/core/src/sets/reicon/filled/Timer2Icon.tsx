import type { IconProps } from "../../../shared/types";

export function Timer2Icon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M12 1.333a1 1 0 0 0-1 1v3.334a1 1 0 0 0 2 0V3.39c4.31.497 7.667 4.168 7.667 8.609 0 4.779-3.888 8.667-8.667 8.667S3.333 16.779 3.333 12c0-2.315.902-4.492 2.539-6.128a1 1 0 1 0-1.415-1.415A10.6 10.6 0 0 0 1.333 12c0 5.881 4.786 10.667 10.667 10.667S22.667 17.88 22.667 12 17.88 1.333 12 1.333Z"/><path fillRule="evenodd" d="M7.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414Z" clipRule="evenodd"/></g>
    </svg>
  );
}
