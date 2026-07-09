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
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M3.75 1.25a1.5 1.5 0 0 0-1.5 1.5v5.246c0 .797.224 1.577.646 2.253l1.74 2.784a.75.75 0 0 1 .114.397V22a.75.75 0 0 0 1.5 0v-8.57a2.25 2.25 0 0 0-.342-1.192l-1.74-2.784a2.75 2.75 0 0 1-.418-1.458V2.75h2.5v2a1.5 1.5 0 0 0 1.5 1.5h1.5a1.5 1.5 0 0 0 1.5-1.5v-2h2.5v2a1.5 1.5 0 0 0 1.5 1.5h1.5a1.5 1.5 0 0 0 1.5-1.5v-2h2.5v5.246a2.75 2.75 0 0 1-.418 1.458l-1.74 2.784a2.25 2.25 0 0 0-.342 1.192V22a.75.75 0 0 0 1.5 0v-8.57c0-.14.04-.278.114-.397l1.74-2.784a4.25 4.25 0 0 0 .646-2.253V2.75a1.5 1.5 0 0 0-1.5-1.5h-2.5a1.5 1.5 0 0 0-1.5 1.5v2h-1.5v-2a1.5 1.5 0 0 0-1.5-1.5h-2.5a1.5 1.5 0 0 0-1.5 1.5v2h-1.5v-2a1.5 1.5 0 0 0-1.5-1.5z"/><path fill="currentColor" fillRule="evenodd" d="M12 11.25A2.75 2.75 0 0 0 9.25 14v3.5c0 .414.336.75.75.75h4a.75.75 0 0 0 .75-.75V14A2.75 2.75 0 0 0 12 11.25ZM10.75 14a1.25 1.25 0 1 1 2.5 0v2.75h-2.5z" clipRule="evenodd"/>
    </svg>
  );
}
