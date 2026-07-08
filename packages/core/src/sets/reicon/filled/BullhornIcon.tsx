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
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" fillRule="evenodd" d="M21.25 16.838v-4.716a2.251 2.251 0 0 0 0-4.244V3.162a1.912 1.912 0 0 0-2.938-1.613l-2.144 1.364A11.75 11.75 0 0 1 9.86 4.75H6.5a5.25 5.25 0 0 0 0 10.5h.183l1.685 6.322a1.25 1.25 0 0 0 1.208.928h1.674c.69 0 1.25-.56 1.25-1.25v-5.7c1.295.299 2.536.817 3.668 1.537l2.144 1.364a1.912 1.912 0 0 0 2.938-1.613ZM19.338 2.75a.4.4 0 0 0-.22.064L16.973 4.18a13.3 13.3 0 0 1-4.223 1.75v8.138a13.3 13.3 0 0 1 4.224 1.752l2.143 1.365a.41.41 0 0 0 .633-.348V3.162a.41.41 0 0 0-.412-.412Z" clipRule="evenodd"/>
    </svg>
  );
}
