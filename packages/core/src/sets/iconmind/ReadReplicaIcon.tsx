import type { IconProps } from "../../shared/types";

export function ReadReplicaIcon({
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
      <path d="M2 6a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm0 3h9m3.5 1a2 2 0 0 1 2-2H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2ZM11 12h3.5"/>
    </svg>
  );
}
