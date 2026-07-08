import type { IconProps } from "../../../shared/types";

export function PenSparkleIcon({
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
      <g transform="scale(1.33333)"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.75 15.25s3.599-.568 4.546-1.515l7.327-7.327a2.142 2.142 0 1 0-3.03-3.03l-7.327 7.327c-.947.947-1.515 4.546-1.515 4.546h0Z"/><path fill="currentColor" d="m5.493 3.492-.946-.315-.316-.947c-.102-.306-.609-.306-.711 0l-.316.947-.946.315a.375.375 0 0 0 0 .712l.946.315.316.947a.374.374 0 0 0 .71 0l.316-.947.946-.315a.375.375 0 0 0 0-.712Zm11.165 9.498-1.263-.421-.421-1.263c-.137-.408-.812-.408-.949 0l-.421 1.263-1.263.421a.5.5 0 0 0 0 .948l1.263.421.421 1.263a.501.501 0 0 0 .95 0l.421-1.263 1.263-.421a.5.5 0 0 0 0-.948Z"/><circle cx="7.75" cy="1.75" r=".75" fill="currentColor"/></g>
    </svg>
  );
}
