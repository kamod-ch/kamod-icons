import type { IconProps } from "../../../shared/types";

export function MusicNoteSparkleIcon({
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
      <g transform="scale(1.33333)"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9.615 2.382 3.5-.477a1 1 0 0 1 1.135.991v1.731a1 1 0 0 1-.865.991L8.75 6.25V3.373a1 1 0 0 1 .865-.991M8.75 6.25v7.25"/><circle cx="6" cy="13.5" r="2.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path fill="currentColor" d="m4.493 5.742-.946-.315-.316-.947c-.102-.306-.609-.306-.711 0l-.316.947-.946.315a.375.375 0 0 0 0 .712l.946.315.316.947a.374.374 0 0 0 .71 0l.316-.947.946-.315a.375.375 0 0 0 0-.712Zm12.165 5.248-1.263-.421-.421-1.263c-.137-.408-.812-.408-.949 0l-.421 1.263-1.263.421a.5.5 0 0 0 0 .948l1.263.421.421 1.263a.501.501 0 0 0 .95 0l.421-1.263 1.263-.421a.5.5 0 0 0 0-.948Z"/><circle cx="5.25" cy="2.25" r=".75" fill="currentColor"/></g>
    </svg>
  );
}
