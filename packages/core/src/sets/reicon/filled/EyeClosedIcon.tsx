import type { IconProps } from "../../../shared/types";

export function EyeClosedIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M22.221 8.979a1 1 0 0 0-1.414.014C18.468 11.38 15.34 12.692 12 12.692s-6.468-1.313-8.807-3.699a1 1 0 1 0-1.43 1.4c.688.7 1.433 1.32 2.226 1.858l-1.174 1.921a1 1 0 1 0 1.706 1.043l1.208-1.976c.904.441 1.851.784 2.832 1.025l-.444 2.207a1 1 0 0 0 1.96.394l.452-2.246q.729.075 1.471.076c.742 0 .985-.027 1.47-.076l.453 2.246a1 1 0 0 0 1.96-.394l-.444-2.207a14 14 0 0 0 2.832-1.025l1.208 1.976a1 1 0 1 0 1.706-1.043l-1.174-1.921a14.5 14.5 0 0 0 2.225-1.858 1 1 0 0 0-.015-1.414Z"/>
    </svg>
  );
}
