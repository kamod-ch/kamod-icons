import type { IconProps } from "../../../shared/types";

export function MediumIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8m8 0c1.105 0 2-1.79 2-4s-.895-4-2-4-2 1.79-2 4 .895 4 2 4m5 0c.552 0 1-1.79 1-4s-.448-4-1-4-1 1.79-1 4 .448 4 1 4"/>
    </svg>
  );
}
