import type { IconProps } from "../../../shared/types";

export function TableOffIcon({
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
      <path d="M7 3h12a2 2 0 0 1 2 2v12m-.585 3.413A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5c0-.55.223-1.05.583-1.412M3 10h7m4 0h7M10 3v3m0 4v11M3 3l18 18"/>
    </svg>
  );
}
