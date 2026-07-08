import type { IconProps } from "../../../shared/types";

export function Signal2Icon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M13.415 19.293a1 1 0 0 1-.708-.293 1.024 1.024 0 0 0-1.414 0 1.001 1.001 0 0 1-1.414-1.415c1.133-1.133 3.11-1.133 4.244 0a1.004 1.004 0 0 1 0 1.415 1 1 0 0 1-.707.292Z"/><path d="M16.243 16.464a1 1 0 0 1-.707-.293 5.007 5.007 0 0 0-7.072 0 1 1 0 1 1-1.415-1.415 7.01 7.01 0 0 1 9.9 0 1 1 0 0 1-.706 1.708Z"/><path d="M19.07 13.636a1 1 0 0 1-.706-.293c-3.51-3.51-9.219-3.51-12.728 0a1 1 0 1 1-1.415-1.415c4.29-4.29 11.267-4.29 15.556 0a1 1 0 0 1-.706 1.708Z"/><path d="M21.9 10.807a1 1 0 0 1-.707-.294c-5.069-5.068-13.316-5.068-18.385 0A1 1 0 1 1 1.393 9.1c5.85-5.848 15.364-5.848 21.214 0a1 1 0 0 1-.707 1.708Z"/></g>
    </svg>
  );
}
