import type { IconProps } from "../../../shared/types";

export function InboxArrowDownIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M7.96 6.96a1 1 0 0 0 0 1.415l3.333 3.333a1 1 0 0 0 1.414 0l3.333-3.333a1 1 0 1 0-1.415-1.415L13 8.587v-4.92a1 1 0 0 0-2 0v4.918L9.372 6.96a1 1 0 0 0-1.415 0Z"/><path d="M19.595 4.992a3.65 3.65 0 0 0-3.414-2.325H16a1 1 0 0 0 0 2h.182c.691 0 1.299.414 1.551 1.057L20.197 12h-4.532a1 1 0 0 0-1 1v1.333a.334.334 0 0 1-.333.334H9.665a.333.333 0 0 1-.333-.334V13a1 1 0 0 0-1-1h-4.53l2.465-6.276a1.66 1.66 0 0 1 1.55-1.057H8a1 1 0 0 0 0-2h-.183a3.65 3.65 0 0 0-3.413 2.325l-2.817 7.172c-.168.428-.254.88-.254 1.341v4.162A3.67 3.67 0 0 0 5 21.333h14a3.67 3.67 0 0 0 3.667-3.666v-4.162c0-.461-.086-.913-.254-1.341z"/></g>
    </svg>
  );
}
