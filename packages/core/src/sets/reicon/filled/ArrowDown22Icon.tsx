import type { IconProps } from "../../../shared/types";

export function ArrowDown22Icon({
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
      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm3.53 11.03-3 3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-3-3a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.72 1.72V8.5c0-.41.34-.75.75-.75s.75.34.75.75v5.19l1.72-1.72c.29-.29.77-.29 1.06 0s.29.77 0 1.06Z"/>
    </svg>
  );
}
