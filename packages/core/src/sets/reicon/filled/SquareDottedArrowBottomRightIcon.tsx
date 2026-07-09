import type { IconProps } from "../../../shared/types";

export function SquareDottedArrowBottomRightIcon({
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
      <g fill="currentColor" transform="scale(1.33333)"><circle cx="2.75" cy="9" r=".75"/><circle cx="9" cy="2.75" r=".75"/><circle cx="2.75" cy="2.75" r=".75"/><circle cx="2.75" cy="5.875" r=".75"/><circle cx="2.75" cy="12.125" r=".75"/><circle cx="2.75" cy="15.25" r=".75"/><circle cx="15.25" cy="2.75" r=".75"/><circle cx="15.25" cy="5.875" r=".75"/><circle cx="12.125" cy="2.75" r=".75"/><circle cx="5.875" cy="2.75" r=".75"/><circle cx="5.875" cy="15.25" r=".75"/><path d="M16 9.25a.75.75 0 0 0-.75-.75h-6a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0v-4.189l4.72 4.72a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.061L11.06 10h4.189a.75.75 0 0 0 .75-.75Z"/></g>
    </svg>
  );
}
