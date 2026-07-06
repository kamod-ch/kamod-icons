import type { IconProps } from "../../../shared/types";

export function AccessPointOffIcon({
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
      <path d="m3 3 18 18M14.828 9.172A4 4 0 0 1 16 12m1.657-5.657a8 8 0 0 1 1.635 8.952m-10.124-.467a4 4 0 0 1 0-5.656m-2.831 8.485a8 8 0 0 1 0-11.314"/>
    </svg>
  );
}
