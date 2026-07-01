import type { IconProps } from "../../../shared/types";

export function DivideThreeIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M2.25 12a.75.75 0 0 1 .75-.75h4A5.75 5.75 0 0 1 12.75 17v4a.75.75 0 0 1-1.5 0v-4A4.25 4.25 0 0 0 7 12.75H3a.75.75 0 0 1-.75-.75" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M17 12.75A4.25 4.25 0 0 0 12.75 17v4a.75.75 0 0 1-1.5 0v-4A5.75 5.75 0 0 1 17 11.25h4a.75.75 0 0 1 0 1.5z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M6.287 7.307A.75.75 0 0 1 6.75 8v8a.75.75 0 0 1-1.28.53l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 .817-.163m11.426 0A.75.75 0 0 0 17.25 8v8a.75.75 0 0 0 1.28.53l4-4a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 0 0-.817-.163" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M11.47 1.47a.75.75 0 0 1 1.06 0l4 4A.75.75 0 0 1 16 6.75H8a.75.75 0 0 1-.53-1.28z" clipRule="evenodd"/>
    </svg>
  );
}
