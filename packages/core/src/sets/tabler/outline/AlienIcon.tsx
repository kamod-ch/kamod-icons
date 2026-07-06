import type { IconProps } from "../../../shared/types";

export function AlienIcon({
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
      <path d="M11 17a2.5 2.5 0 0 0 2 0"/><path d="M12 3C7.336 3 4.604 5.331 4.138 8.595a11.82 11.82 0 0 0 2 8.592 10.8 10.8 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.8 10.8 0 0 0 3.199-3.064 11.9 11.9 0 0 0 2-8.592C19.4 5.33 16.668 3 12.004 3zm-4 8 2 2m6-2-2 2"/>
    </svg>
  );
}
