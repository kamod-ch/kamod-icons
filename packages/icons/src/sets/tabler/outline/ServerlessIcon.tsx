import type { IconProps } from "../../../shared/types";

export function ServerlessIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="m8 19 3.03 1.748a2 2 0 0 0 1.94 0l6-3.843A2 2 0 0 0 20 15.152V9l-8 3-8 3V8.595c0-.728.394-1.399 1.03-1.752l6-3.582a2.05 2.05 0 0 1 2 0L16 5"/>
    </svg>
  );
}
