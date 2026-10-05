import type { IconProps } from "../../shared/types";

export function TextureGenerateIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="m12 2 6 6v8l-6 6-6-6V8ZM7 12l4-4m-2 7 6-6m-3 8 5-5"/>
    </svg>
  );
}
