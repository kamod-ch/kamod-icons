import type { IconProps } from "../../shared/types";

export function FilesIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.5 2H8.6c-.4 0-.8.2-1.1.5S7 3.2 7 3.6v12.8c0 .4.2.8.5 1.1s.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5s.5-.7.5-1.1V6.5z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7.6v12.8c0 .4.2.8.5 1.1s.7.5 1.1.5h9.8M15 2v5h5"/>
    </svg>
  );
}
