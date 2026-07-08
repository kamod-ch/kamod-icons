import type { IconProps } from "../../../shared/types";

export function ArrowDottedRotateAnticlockwiseIcon({
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
      <g fill="currentColor" transform="scale(1.33333)"><path d="M9 1a7.98 7.98 0 0 0-6.268 3.048l-.117-.846a.755.755 0 0 0-.846-.64.75.75 0 0 0-.641.846l.408 2.945a.75.75 0 0 0 .846.64l2.944-.407a.75.75 0 0 0 .641-.846.757.757 0 0 0-.846-.641l-1.448.2a6.48 6.48 0 0 1 5.326-2.8c3.397 0 6.245 2.651 6.483 6.037a.75.75 0 0 0 .747.697l.054-.002a.75.75 0 0 0 .695-.801C16.685 4.263 13.18.999 8.999.999Z"/><circle cx="14.127" cy="14.126" r=".75"/><circle cx="9" cy="16.25" r=".75"/><circle cx="3.873" cy="14.126" r=".75"/><circle cx="1.75" cy="9" r=".75"/><path d="M15.985 11.082a.75.75 0 1 0-.575 1.385.75.75 0 0 0 .575-1.385Zm-4.498 3.923a.75.75 0 1 0 .574 1.386.75.75 0 0 0-.574-1.386Zm-4.974 0a.75.75 0 1 0-.575 1.385.75.75 0 0 0 .575-1.385Zm-4.498-3.923a.75.75 0 1 0 .575 1.386.75.75 0 0 0-.575-1.386Z"/></g>
    </svg>
  );
}
