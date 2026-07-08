import type { IconProps } from "../../../shared/types";

export function EthereumIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M19.242 12.609a2.25 2.25 0 0 1-.37 1.14l-5.416 8.209a1.75 1.75 0 0 1-2.922 0l-5.416-8.209a2.25 2.25 0 0 1-.063-2.377l5.43-9.26a1.75 1.75 0 0 1 3.02 0l5.43 9.26c.183.313.285.658.305 1.007a.8.8 0 0 1 .002.23Zm-7.992 4.298a2 2 0 0 1-.168-.09l-3.609-2.222 3.777 5.723zm5.26-2.302-3.76 5.7v-3.398q.084-.04.167-.09z" clipRule="evenodd"/>
    </svg>
  );
}
