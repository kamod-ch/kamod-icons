import type { IconProps } from "../../../shared/types";

export function BrandVintedIcon({
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
      <path d="M11.028 6c0 7.695-.292 11.728 0 12 2.046-5 4.246-12.642 5.252-14.099.343-.497.768-.93 1.257-1.277.603-.39 1.292-.76 1.463-.575-.07 2.319-4.023 15.822-4.209 16.314a6.14 6.14 0 0 1-3.465 3.386c-3.213.78-3.429-.446-3.836-1.134C6.54 18.512 5.808 6.355 6.045 5c.05-.523.143-1.851 2.491-2 2.359-.354 2.547 1.404 2.492 3"/>
    </svg>
  );
}
