import type { IconProps } from "../../../shared/types";

export function EuroSquareIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zm10.27 4c-2.52 0-4.633 1.689-5.354 4H8a.75.75 0 0 0 0 1.5h.255a6 6 0 0 0 0 .5H8a.75.75 0 0 0 0 1.5h.516c.721 2.311 2.834 4 5.354 4 .883 0 1.72-.21 2.466-.582a.75.75 0 0 0-.671-1.341 4 4 0 0 1-1.795.423c-1.66 0-3.107-1.02-3.756-2.5H14a.75.75 0 0 0 0-1.5H9.757a5 5 0 0 1 0-.5H14a.75.75 0 0 0 0-1.5h-3.886c.649-1.48 2.096-2.5 3.756-2.5.644 0 1.252.152 1.794.423a.75.75 0 1 0 .672-1.341 5.5 5.5 0 0 0-2.466-.582" clipRule="evenodd"/>
    </svg>
  );
}
