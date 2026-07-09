import type { IconProps } from "../../../shared/types";

export function SkirtIcon({
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
      <path fill="currentColor" d="M16.108 2H7.892c-.969 0-1.453 0-1.754.293s-.3.764-.3 1.707v.75h12.324V4c0-.943 0-1.414-.3-1.707C17.56 2 17.077 2 16.108 2ZM2.08 17.953 5.612 6.25h3.423L7.147 21.407a1 1 0 0 0-.005.095C5.046 21.041 3.6 20.35 2.734 19.83c-.652-.391-.87-1.16-.653-1.876Zm6.513 3.813C9.606 21.912 10.74 22 12 22s2.393-.088 3.407-.235a1 1 0 0 1-.043-.172L13.454 6.25h-2.908l-1.91 15.343a1 1 0 0 1-.043.172ZM14.966 6.25l1.886 15.157a1 1 0 0 1 .006.096c2.096-.462 3.541-1.154 4.407-1.674.653-.391.87-1.16.654-1.876L18.39 6.25z"/>
    </svg>
  );
}
