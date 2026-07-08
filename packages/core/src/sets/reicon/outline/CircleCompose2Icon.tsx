import type { IconProps } from "../../../shared/types";

export function CircleCompose2Icon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.946 2.398c-.313-.03-.625-.065-.946-.065A9.667 9.667 0 0 0 2.333 12a9.667 9.667 0 1 0 19.334 0c0-.32-.034-.633-.065-.946"/><path d="M10.333 13.667s3.112-.112 4.212-1.212l6.5-6.5a2.121 2.121 0 0 0-3-3l-6.5 6.5c-1.037 1.037-1.212 4.212-1.212 4.212"/></g>
    </svg>
  );
}
