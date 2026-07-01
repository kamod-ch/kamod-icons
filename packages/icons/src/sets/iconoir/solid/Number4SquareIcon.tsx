import type { IconProps } from "../../../shared/types";

export function Number4SquareIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zM14.25 8a.75.75 0 0 0-1.33-.475l-4.5 5.5A.75.75 0 0 0 9 14.25h3.75V16a.75.75 0 0 0 1.5 0v-1.75H15a.75.75 0 0 0 0-1.5h-.75zm-1.5 2.101v2.649h-2.167z" clipRule="evenodd"/>
    </svg>
  );
}
