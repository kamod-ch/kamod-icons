import type { IconProps } from "../../../shared/types";

export function BorderBottomPlusIcon({
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
      <path d="M4 20h16M4 16v-.01M20 16v-.01M4 12v-.01M20 12v-.01M4 8v-.01M20 8v-.01M4 4v-.01M8 4v-.01M12 4v-.01M16 4v-.01M20 4v-.01M15 12H9m3-3v6"/>
    </svg>
  );
}
