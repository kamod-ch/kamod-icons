import type { IconProps } from "../../../shared/types";

export function ShortcutSquareIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M2.25 3.6c0-.746.604-1.35 1.35-1.35h16.8c.746 0 1.35.604 1.35 1.35v16.8a1.35 1.35 0 0 1-1.35 1.35H3.6a1.35 1.35 0 0 1-1.35-1.35zm13.33 3.92a.75.75 0 0 0-.555-.245h-4.95a.75.75 0 1 0 0 1.5h3.14l-2.256 2.256c-.711.711-1.101 1.46-1.25 2.2a3.8 3.8 0 0 0 .14 1.97 5 5 0 0 0 .682 1.32c.197.275.36.45.412.504.29.295.78.312 1.077.016a.75.75 0 0 0 0-1.06 3 3 0 0 1-.268-.332 3.6 3.6 0 0 1-.48-.922 2.3 2.3 0 0 1-.091-1.202c.084-.419.313-.908.839-1.434l2.255-2.255v3.14a.75.75 0 0 0 1.5 0v-4.95a.75.75 0 0 0-.196-.506" clipRule="evenodd"/>
    </svg>
  );
}
