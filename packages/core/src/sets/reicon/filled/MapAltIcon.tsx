import type { IconProps } from "../../../shared/types";

export function MapAltIcon({
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
      <path fill="currentColor" d="M9.25 18.356a.2.2 0 0 0 .1.174l5.176 2.957c.103.059.224-.021.224-.14V5.643a.2.2 0 0 0-.1-.173L9.473 2.513c-.103-.06-.224.02-.224.14zm-1.5-15.73c0-.114-.115-.192-.216-.138l-5.1 2.747a2.25 2.25 0 0 0-1.184 1.98v12.628a1.25 1.25 0 0 0 1.843 1.1l4.552-2.45a.2.2 0 0 0 .105-.177zm8.605 2.881a.2.2 0 0 0-.105.177v15.69c0 .114.115.192.216.137l5.1-2.746a2.25 2.25 0 0 0 1.184-1.981V4.157a1.25 1.25 0 0 0-1.843-1.1z"/>
    </svg>
  );
}
