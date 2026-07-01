import type { IconProps } from "../../../shared/types";

export function ServerConnectionIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 19h9m9 0h-9m0 0v-6m0 0h6V5H6v8zM9 9.01l.01-.011M12 9.01l.01-.011"/>
    </svg>
  );
}
