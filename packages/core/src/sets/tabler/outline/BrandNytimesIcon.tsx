import type { IconProps } from "../../../shared/types";

export function BrandNytimesIcon({
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
      <path d="M11.036 5.058a8 8 0 1 0 8.706 9.965"/><path d="M12 21V10l-7.5 4m13-11a2.5 2.5 0 1 1 0 5l-11-5a2.5 2.5 0 0 0-.67 4.91M9 12v8m7-7h-.01"/>
    </svg>
  );
}
