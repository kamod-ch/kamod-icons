import type { IconProps } from "../../../shared/types";

export function BullhornIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M21.25 16.838v-4.716a2.251 2.251 0 0 0 0-4.244V3.162a1.912 1.912 0 0 0-2.938-1.613l-2.144 1.364A11.75 11.75 0 0 1 9.86 4.75H6.5a5.25 5.25 0 0 0-.076 10.5l1.653 6.2a1.75 1.75 0 0 0 1.691 1.3H11A1.75 1.75 0 0 0 12.75 21v-5.39a11.8 11.8 0 0 1 3.418 1.476l2.144 1.364a1.912 1.912 0 0 0 2.938-1.613ZM19.338 2.75a.4.4 0 0 0-.22.064L16.973 4.18a13.3 13.3 0 0 1-4.223 1.75v8.138a13.3 13.3 0 0 1 4.224 1.752l2.143 1.365a.41.41 0 0 0 .633-.348V3.162a.41.41 0 0 0-.412-.412ZM11.25 13.823V6.177q-.69.073-1.39.073H6.5a3.75 3.75 0 1 0 0 7.5h3.36q.7 0 1.39.073Zm-1.723 7.241-1.55-5.814H9.86q.7 0 1.39.082V21a.25.25 0 0 1-.25.25H9.768a.25.25 0 0 1-.241-.186Z" clipRule="evenodd"/>
    </svg>
  );
}
