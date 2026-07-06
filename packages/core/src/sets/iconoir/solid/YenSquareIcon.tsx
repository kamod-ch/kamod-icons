import type { IconProps } from "../../../shared/types";

export function YenSquareIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zm4.4 10a.75.75 0 0 0 0 1.5h3.25v.5H8a.75.75 0 0 0 0 1.5h3.25V18a.75.75 0 0 0 1.5 0v-2.25H16a.75.75 0 0 0 0-1.5h-3.25v-.5H16a.75.75 0 0 0 0-1.5h-2.89l3.497-4.809a.75.75 0 0 0-1.214-.882L12 11.225 8.607 6.559a.75.75 0 1 0-1.214.882l3.498 4.809z" clipRule="evenodd"/>
    </svg>
  );
}
