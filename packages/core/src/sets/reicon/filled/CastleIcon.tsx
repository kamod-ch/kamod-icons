import type { IconProps } from "../../../shared/types";

export function CastleIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M2.25 2.75a1.5 1.5 0 0 1 1.5-1.5h2.5a1.5 1.5 0 0 1 1.5 1.5v2h1.5v-2a1.5 1.5 0 0 1 1.5-1.5h2.5a1.5 1.5 0 0 1 1.5 1.5v2h1.5v-2a1.5 1.5 0 0 1 1.5-1.5h2.5a1.5 1.5 0 0 1 1.5 1.5v5.246a4.25 4.25 0 0 1-.646 2.253l-1.74 2.784a.75.75 0 0 0-.114.397V22a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75v-8.57a.75.75 0 0 0-.114-.397l-1.74-2.784a4.25 4.25 0 0 1-.646-2.253zM9.75 14a2.25 2.25 0 0 1 4.5 0v3.5a.25.25 0 0 1-.25.25h-4a.25.25 0 0 1-.25-.25z" clipRule="evenodd"/>
    </svg>
  );
}
