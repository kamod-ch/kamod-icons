import type { IconProps } from "../../../shared/types";

export function SortDownUpIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M13.559 10.121a2.25 2.25 0 0 1-3.119 0L4.882 4.778c-1.33-1.28-.425-3.528 1.42-3.528h11.395c1.845 0 2.75 2.249 1.42 3.528zm-2.08-1.081c.291.28.75.28 1.04 0l5.559-5.343a.55.55 0 0 0-.381-.947H6.303a.55.55 0 0 0-.382.946zm2.08 4.839a2.25 2.25 0 0 0-3.119 0l-5.558 5.343c-1.33 1.28-.425 3.528 1.42 3.528h11.395c1.845 0 2.75-2.249 1.42-3.528zm-2.08 1.081a.75.75 0 0 1 1.04 0l5.559 5.343a.55.55 0 0 1-.381.947H6.303a.55.55 0 0 1-.382-.947z" clipRule="evenodd"/>
    </svg>
  );
}
