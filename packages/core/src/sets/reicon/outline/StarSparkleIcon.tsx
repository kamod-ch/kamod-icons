import type { IconProps } from "../../../shared/types";

export function StarSparkleIcon({
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
      <g transform="scale(1.33333)"><path fill="currentColor" d="m4.743 2.492-.946-.315-.316-.947c-.102-.306-.609-.306-.711 0l-.316.947-.946.315a.375.375 0 0 0 0 .712l.946.315.316.947a.374.374 0 0 0 .71 0l.316-.947.946-.315a.375.375 0 0 0 0-.712z"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m13.83 9.377 2.42-2.36-5.01-.727L9 1.75 6.76 6.29l-5.01.727 3.625 3.534-.856 4.989 3.762-1.977"/><path fill="currentColor" d="m15.158 13.49-1.263-.421-.421-1.263c-.137-.408-.812-.408-.949 0l-.421 1.263-1.263.421a.5.5 0 0 0 0 .948l1.263.421.421 1.263a.501.501 0 0 0 .95 0l.421-1.263 1.263-.421a.5.5 0 0 0 0-.948z"/><circle cx="14.25" cy="3.25" r=".75" fill="currentColor"/></g>
    </svg>
  );
}
