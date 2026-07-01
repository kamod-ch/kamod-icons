import type { IconProps } from "../../../shared/types";

export function Number0SquareIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zM10.25 10c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-2.75A2.75 2.75 0 0 0 8.75 10v4a2.75 2.75 0 0 0 2.75 2.75h1A2.75 2.75 0 0 0 15.25 14v-4a2.75 2.75 0 0 0-2.75-2.75z" clipRule="evenodd"/>
    </svg>
  );
}
