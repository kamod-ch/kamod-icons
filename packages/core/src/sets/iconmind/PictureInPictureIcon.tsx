import type { IconProps } from "../../shared/types";

export function PictureInPictureIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"/><path d="M12 14.75a2.25 2.25 0 0 1 2.25-2.25h2.5A2.25 2.25 0 0 1 19 14.75 2.25 2.25 0 0 1 16.75 17h-2.5A2.25 2.25 0 0 1 12 14.75"/>
    </svg>
  );
}
