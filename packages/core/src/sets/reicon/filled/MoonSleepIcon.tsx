import type { IconProps } from "../../../shared/types";

export function MoonSleepIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M18 2.75a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .53 1.28l-2.72 2.72H22a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.53-1.28l2.72-2.72zm-4.5 6a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .53 1.28l-1.72 1.72h1.19a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.53-1.28l1.72-1.72z" clipRule="evenodd"/><path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10 0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10Z"/>
    </svg>
  );
}
