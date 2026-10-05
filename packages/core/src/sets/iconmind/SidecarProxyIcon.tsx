import type { IconProps } from "../../shared/types";

export function SidecarProxyIcon({
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
      <path d="M2 6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm13.5 4a2 2 0 0 1 2-2H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2.5a2 2 0 0 1-2-2ZM13 12h2.5M5 9h5"/>
    </svg>
  );
}
