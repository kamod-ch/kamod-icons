import type { IconProps } from "../../../shared/types";

export function BadgePercentIcon({
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
      <g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M8.534 2.095c1.656-2.46 5.276-2.46 6.932 0l.394.586.693-.136c2.91-.569 5.47 1.992 4.902 4.902l-.136.693.586.394c2.46 1.656 2.46 5.276 0 6.932l-.586.394.136.693c.569 2.91-1.992 5.47-4.902 4.902l-.693-.136-.394.586c-1.656 2.46-5.276 2.46-6.932 0l-.394-.586-.693.136c-2.91.569-5.47-1.992-4.902-4.902l.136-.693-.586-.394c-2.46-1.656-2.46-5.276 0-6.932l.586-.394-.136-.693c-.569-2.91 1.992-5.47 4.902-4.902l.693.136zM15.53 8.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0ZM8.5 9.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm5 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}
