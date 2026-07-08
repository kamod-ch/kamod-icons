import type { IconProps } from "../../../shared/types";

export function CrosshairsIcon({
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
      <path fill="currentColor" d="M8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z"/><path fill="currentColor" fillRule="evenodd" d="M12.75 2a.75.75 0 0 0-1.5 0v1.282a8.75 8.75 0 0 0-7.968 7.968H2a.75.75 0 0 0 0 1.5h1.282a8.75 8.75 0 0 0 7.968 7.968V22a.75.75 0 0 0 1.5 0v-1.282a8.75 8.75 0 0 0 7.968-7.968H22a.75.75 0 0 0 0-1.5h-1.282a8.75 8.75 0 0 0-7.968-7.968zm6.5 10a7.25 7.25 0 1 0-14.5 0 7.25 7.25 0 0 0 14.5 0Z" clipRule="evenodd"/>
    </svg>
  );
}
