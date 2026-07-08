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
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" transform="scale(1.33333)"><path d="M13.487 5.861A1.76 1.76 0 0 0 15 4.127V2.896a1.748 1.748 0 0 0-1.986-1.734l-3.5.477a1.76 1.76 0 0 0-1.513 1.734v7.262a3.47 3.47 0 0 0-2-.635c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5V6.405l3.987-.543ZM2.875 7.973a.375.375 0 0 0 .355-.256l.316-.947.946-.315a.375.375 0 0 0 0-.712l-.946-.315-.316-.947c-.102-.306-.609-.306-.711 0l-.316.947-.946.315a.375.375 0 0 0 0 .712l.946.315.316.947a.37.37 0 0 0 .355.256Zm13.783 3.017-1.263-.421-.421-1.263c-.137-.408-.812-.408-.949 0l-.421 1.263-1.263.421a.5.5 0 0 0 0 .948l1.263.421.421 1.263a.501.501 0 0 0 .95 0l.421-1.263 1.263-.421a.5.5 0 0 0 0-.948Z"/><circle cx="5.25" cy="2.25" r=".75"/></g>
    </svg>
  );
}
