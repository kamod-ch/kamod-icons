import type { IconProps } from "../../../shared/types";

export function MsgBubbleUserIcon({
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
      <g fill="currentColor" transform="scale(1.33333)"><path d="M13.25.5A4.756 4.756 0 0 0 8.5 5.25c0 .83.221 1.65.615 2.326.057.184-.095.843-.396 1.144a.75.75 0 0 0 .49 1.279q.074.004.15.004c.628 0 1.36-.197 1.898-.443a4.7 4.7 0 0 0 1.991.441c2.619 0 4.75-2.131 4.75-4.75S15.869.5 13.25.5Z"/><circle cx="4.551" cy="8.75" r="2.75"/><path d="M.75 16.75h7.602a.748.748 0 0 0 .712-.984C8.422 13.812 6.609 12.5 4.55 12.5S.68 13.812.037 15.766a.75.75 0 0 0 .712.984Z"/></g>
    </svg>
  );
}
