import type { IconProps } from "../../../shared/types";

export function WifiOffIcon({
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
      <g fill="currentColor" clipPath="url(#a)"><path d="M1.53.47A.75.75 0 0 0 .47 1.53l3.672 3.673A15.5 15.5 0 0 0 .464 7.975a.75.75 0 0 0 1.072 1.05 14 14 0 0 1 3.718-2.71l2.672 2.671a11.7 11.7 0 0 0-3.941 2.467.75.75 0 0 0 1.03 1.09A10.2 10.2 0 0 1 9.11 10.17l3.083 3.083L12 13.25c-1.707 0-3.146.657-4.263 1.703a.75.75 0 0 0 1.026 1.095c.864-.81 1.944-1.298 3.237-1.298.858 0 1.616.214 2.277.588l8.193 8.192a.75.75 0 1 0 1.06-1.06l-8.25-8.25-.023-.024L9.87 8.811l-.018-.02-3.902-3.9-.025-.025zM12 4.75a15.5 15.5 0 0 0-3.435.38.75.75 0 1 1-.332-1.463A17 17 0 0 1 12 3.25c4.504 0 8.595 1.724 11.536 4.725a.75.75 0 1 1-1.072 1.05C19.815 6.32 16.114 4.75 12 4.75Zm.304 4.228a.75.75 0 0 1 .818-.674 11.64 11.64 0 0 1 6.893 3.151.75.75 0 1 1-1.03 1.09 10.14 10.14 0 0 0-6.006-2.748.75.75 0 0 1-.675-.819Z"/><path d="M11 19a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}
