import type { IconProps } from "../../../shared/types";

export function ApiAppIcon({
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
      <path d="M12 15H5.5a2.5 2.5 0 1 1 0-5H6m9 2v6.5a2.5 2.5 0 1 1-5 0V18m2-9h6.5a2.5 2.5 0 1 1 0 5H18m-9-2V5.5a2.5 2.5 0 0 1 5 0V6"/>
    </svg>
  );
}
