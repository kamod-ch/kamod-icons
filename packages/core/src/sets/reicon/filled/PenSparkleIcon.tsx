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
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" transform="scale(1.33333)"><path d="m5.493 3.492-.946-.315-.316-.947c-.102-.306-.609-.306-.711 0l-.316.947-.946.315a.375.375 0 0 0 0 .712l.946.315.316.947a.374.374 0 0 0 .71 0l.316-.947.946-.315a.375.375 0 0 0 0-.712Zm11.165 9.498-1.263-.421-.421-1.263c-.137-.408-.812-.408-.949 0l-.421 1.263-1.263.421a.5.5 0 0 0 0 .948l1.263.421.421 1.263a.501.501 0 0 0 .95 0l.421-1.263 1.263-.421a.5.5 0 0 0 0-.948Z"/><circle cx="7.75" cy="1.75" r=".75"/><path d="M15.151 2.848c-.998-.998-2.739-.998-3.737 0l-7.809 7.809c-.862.863-1.401 3.406-1.594 4.459a.752.752 0 0 0 .872.873c1.053-.191 3.595-.729 4.46-1.593l7.808-7.809a2.647 2.647 0 0 0 0-3.738Z"/></g>
    </svg>
  );
}
