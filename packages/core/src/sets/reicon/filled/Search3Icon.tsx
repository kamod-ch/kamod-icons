import type { IconProps } from "../../../shared/types";

export function Search3Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M17.82 19.7a1.77 1.77 0 0 1 1.9-1.917c.189.016.414.084.643.154l.066.02.06.018c.211.063.42.126.58.212a1.786 1.786 0 0 1 .638 2.55c-.1.151-.255.307-.41.464l-.045.044-.044.045c-.156.157-.31.313-.46.414a1.754 1.754 0 0 1-2.528-.643 3.3 3.3 0 0 1-.21-.585l-.018-.06-.02-.067c-.07-.232-.137-.459-.153-.648Z" clipRule="evenodd"/><path fill="currentColor" d="M20.128 11.143c0 5.05-4.058 9.143-9.064 9.143S2 16.192 2 11.143 6.058 2 11.064 2s9.064 4.093 9.064 9.143Z"/>
    </svg>
  );
}
