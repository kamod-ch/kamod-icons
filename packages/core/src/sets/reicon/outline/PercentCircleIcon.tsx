import type { IconProps } from "../../../shared/types";

export function PercentCircleIcon({
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
      <g fill="currentColor" clipPath="url(#a)"><path d="M15.53 9.53a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06zM8.5 9.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/><path fillRule="evenodd" d="M12 .25C5.51.25.25 5.51.25 12S5.51 23.75 12 23.75 23.75 18.49 23.75 12 18.49.25 12 .25ZM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12Z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}
