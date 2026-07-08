import type { IconProps } from "../../../shared/types";

export function HalfDottedCirclePlayIcon({
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
      <g fill="currentColor" transform="scale(1.33333)"><path d="M12.031 10.08c.388-.227.62-.63.62-1.08s-.232-.853-.62-1.08L8.38 5.791a1.25 1.25 0 0 0-1.879 1.08v4.259a1.254 1.254 0 0 0 1.25 1.25c.218 0 .436-.057.63-.169l3.651-2.13Z"/><path d="M9 1a.75.75 0 0 0 0 1.5c3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5A.75.75 0 0 0 9 17c4.411 0 8-3.589 8-8s-3.589-8-8-8ZM3.343 13.596a.75.75 0 1 0 1.06 1.061.75.75 0 0 0-1.06-1.061Z"/><circle cx="1.75" cy="9" r=".75"/><path d="M3.343 3.343a.75.75 0 1 0 1.06 1.061.75.75 0 0 0-1.06-1.061Zm3.17 11.662a.75.75 0 1 0-.574 1.387.75.75 0 0 0 .574-1.387Zm-4.498-3.923a.75.75 0 1 0 .574 1.386.75.75 0 0 0-.574-1.386Zm.574-5.549a.75.75 0 1 0-.575 1.385.75.75 0 0 0 .575-1.385Zm3.924-2.538a.75.75 0 1 0-.574-1.386.75.75 0 0 0 .574 1.386Z"/></g>
    </svg>
  );
}
