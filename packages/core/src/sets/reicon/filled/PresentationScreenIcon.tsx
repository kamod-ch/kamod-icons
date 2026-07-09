import type { IconProps } from "../../../shared/types";

export function PresentationScreenIcon({
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
      <g fill="currentColor" transform="scale(1.33333)"><path d="M5.75 17a.75.75 0 0 1-.711-.988l1-3a.75.75 0 0 1 1.423.475l-1 3a.75.75 0 0 1-.711.513Zm6.5 0a.75.75 0 0 1-.711-.513l-1-3a.75.75 0 0 1 1.423-.475l1 3a.75.75 0 0 1-.711.988Z"/><rect x="1" y="2" rx="2.75" ry="2.75"/><path d="M9 3.5a.75.75 0 0 1-.75-.75V1.5a.75.75 0 0 1 1.5 0v1.25A.75.75 0 0 1 9 3.5Z"/></g>
    </svg>
  );
}
