import type { IconProps } from "../../../shared/types";

export function FerryIcon({
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
      <path d="M22 12a1 1 0 0 1 .86 1.51l-2.202 3.709A4.06 4.06 0 0 1 17.293 19H2a1 1 0 0 1-.957-1.291l1.521-5A1 1 0 0 1 3.521 12zm-3 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-5.106-7.447L14.617 7h.874a1 1 0 0 1 .864.497L18.392 11H5.56l.973-3.284A1 1 0 0 1 7.491 7h4.89l-.275-.553a1 1 0 0 1 1.788-.894"/>
    </svg>
  );
}
