import type { IconProps } from "../../../shared/types";

export function FlagIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M5 1.25a.75.75 0 0 1 .75.75v1.085l1.574-.315a9.43 9.43 0 0 1 5.35.492l.203.081a7.25 7.25 0 0 0 4.45.302 1.95 1.95 0 0 1 2.423 1.892v7.367c0 .988-.673 1.85-1.632 2.09l-.214.053a9.43 9.43 0 0 1-5.788-.393 7.93 7.93 0 0 0-4.498-.413l-1.868.374V22a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 5 1.25Zm.75 11.835 1.574-.315a9.43 9.43 0 0 1 5.35.492 7.93 7.93 0 0 0 4.866.33l.215-.054a.654.654 0 0 0 .495-.634V5.537a.45.45 0 0 0-.559-.437 8.75 8.75 0 0 1-5.371-.364l-.204-.082a7.93 7.93 0 0 0-4.498-.413l-1.868.374z" clipRule="evenodd"/>
    </svg>
  );
}
