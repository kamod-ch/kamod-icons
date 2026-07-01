import type { IconProps } from "../../../shared/types";

export function MailOpenedIcon({
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
      <path d="m3 9 9 6 9-6-9-6z"/><path d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9m0 10 6-6m6 0 6 6"/>
    </svg>
  );
}
