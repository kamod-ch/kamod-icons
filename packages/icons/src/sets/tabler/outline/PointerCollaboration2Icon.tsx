import type { IconProps } from "../../../shared/types";

export function PointerCollaboration2Icon({
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
      <path d="m10.987 13.943 1.957 5.016c.563 1.445 2.633 1.367 3.087-.116l3.895-12.727c.384-1.253-.79-2.426-2.042-2.042L5.157 7.969c-1.483.454-1.56 2.524-.116 3.087l5.017 1.957c.426.166.763.503.929.93M9 20l-1.064-3.151a1.25 1.25 0 0 0-.785-.785L4 15"/>
    </svg>
  );
}
