import type { IconProps } from "../../../shared/types";

export function PointerCollaborationIcon({
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
      <path d="m13.943 13.013 5.016-1.957c1.445-.563 1.367-2.633-.116-3.087L6.116 4.074c-1.253-.384-2.426.79-2.042 2.042l3.895 12.727c.454 1.483 2.524 1.56 3.087.116l1.957-5.017c.166-.426.503-.763.93-.929M20 15l-3.151 1.064a1.25 1.25 0 0 0-.785.785L15 20"/>
    </svg>
  );
}
